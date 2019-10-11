const { createBundleRenderer } = require('vue-server-renderer')
const express = require('express')
const fse = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const { JSDOM } = require('jsdom')
const { minify } = require('html-minifier')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = class SSRenderPlugin {
  constructor (options) {
    this.options = options
  }
  apply (compiler) {
    (new VueSSRServerPlugin()).apply(compiler)
    const resolve = p => path.isAbsolute(p) ? p : path.join(compiler.options.context, p)
    this.routes = this.options.routes
    this.serverBundlePath = resolve(this.options.serverBundlePath)
    this.clientManifestPath = resolve(this.options.clientManifestPath)
    this.templatePath = resolve(this.options.templatePath)
    this.apiPath = resolve(this.options.apiPath)
    this.swPath = resolve(this.options.swPath)
    compiler.hooks.done.tap('ssr-render-plugin', () => {
      return this.render().then(() => {
        this.updateServiceWorker(compiler)
      }).catch(err => {
        console.error('ssr render error: ', err)
        process.exit(-1)
      })
    })
  }
  async render () {
    const serverBundle = require(this.serverBundlePath)
    const clientManifest = require(this.clientManifestPath)
    const renderer = createBundleRenderer(serverBundle, {
      runInNewContext: false,
      clientManifest,
      shouldPrefetch (file, type) {
        if (type === 'style') {
          return false
        }
        if (type === 'script' && file.includes('precache-manifest.')) {
          return false
        }
        return true
      }
    })
    const server = express()
    const template = fse.readFileSync(this.templatePath, 'utf8')
    server.use('/data', express.static(this.apiPath))
    const _server = server.listen(8888)

    await Promise.all(this.options.routes.map(async _path => {
      const context = {
        url: _path,
        publicPath: clientManifest.publicPath,
        SSR_CONTEXT: clientManifest.SSR_CONTEXT
      }
      let html = await renderer.renderToString(context)
      const indexTemplate = template.replace(
        /<!--\[if ([A-Za-z]+)\]><!\[endif\]-->/gm,
        (str, func) => {
          if (typeof context[func] === 'function') {
            return context[func]()
          }
          return context[func]
        }
      )
      const dom = new JSDOM(indexTemplate)
      const doc = dom.window.document
      // for vue cli modern build mode
      doc.head.querySelectorAll('link[rel=preload][as=script]').forEach(tag => {
        if (/\/manifest\.[0-9a-z]+\.js$/.test(tag.href)) {
          tag.remove()
        } else {
          tag.rel = 'modulepreload'
        }
      })
      doc.body.querySelectorAll('script[src$=".js"]').forEach(tag => {
        if (tag.getAttribute('type') === 'module') {
          tag.remove()
        } else if (tag.getAttribute('type') === null) {
          if (tag.getAttribute('nomodule') === null) {
            tag.setAttribute('type', 'module')
          } else if (tag.getAttribute('nomodule') === '') {
            tag.setAttribute('defer', true)
          }
        }
      })
      // "lazy" to load stylesheets because we have critical css
      doc.head.querySelectorAll('link[rel=stylesheet][href$=".css"]').forEach(tag => tag.remove())
      doc.body.querySelector('style[data-vue-ssr-id]').remove()
      // inline small js
      doc.querySelectorAll('script[src$=".js"][type=module]').forEach(tag => {
        const src = tag.src
        const file = path.join(__dirname, '../dist', '.' + src)
        if (fse.lstatSync(file).size < 5000) {
          const content = fse.readFileSync(file, 'utf8')
          tag.setAttribute('data-src', src)
          tag.removeAttribute('src')
          tag.innerHTML = content
          doc.querySelectorAll('link[rel=modulepreload]').forEach(tag => {
            if (tag.href === src) {
              tag.remove()
            }
          })
        }
      })
      html = dom.serialize().replace(/<div id=(app|"app")><\/div>/m, html)
      await fse.outputFile(
        path.join(__dirname, '..', 'dist', _path === '/' ? '' : _path, '/index.html'),
        minify(html, {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true,
          minifyCSS: true,
          minifyJS: true
        })
      )
    }))
    return new Promise(resolve => {
      _server.close(() => {
        console.log(chalk.green('Build done!'))
        resolve()
      })
    })
  }
  updateServiceWorker (compiler) {
    const { context } = compiler.options
    const crypto = require('crypto')
    const hash = v => crypto.createHash('sha256').update(v).digest('hex')
    const swCode = fse.readFileSync(this.swPath, 'utf8')
    const extraPrecaches = this.routes.map(route => {
      const url = (route === '/' ? '' : route) + '/index.html'
      const file = path.join(context, 'dist', '.' + url)
      return {
        revision: hash(fse.readFileSync(file, 'utf8')).substr(0, 20),
        url
      }
    })
    fse.writeFileSync(
      this.swPath,
      swCode.replace(/importScripts\(([^)]*)\);?/m, (str) => {
        return str + '\n\n' + `self.__precacheManifest = ${JSON.stringify(extraPrecaches, null, 2)}.concat(self.__precacheManifest || []);`
      })
    )
  }
}
