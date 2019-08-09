process.env.NODE_ENV = 'production'

const fse = require('fs-extra')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')

const serverBundle = require('../dist/ssr/vue-ssr-server-bundle')
const clientManifest = require('../dist/ssr/vue-ssr-client-manifest')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  clientManifest
})

const express = require('express')
const server = express()
const port = 8081
const { minify } = require('html-minifier')
const template = fse.readFileSync(path.join(__dirname, '../index.html'), 'utf8')

server.use('/src/data', express.static(path.join(__dirname, '../src/data')))
const _server = server.listen(port)

function renderRoute (_path) {
  const context = {
    url: _path,
    publicPath: clientManifest.publicPath,
    SSR_CONTEXT: clientManifest.SSR_CONTEXT
  }
  return renderer.renderToString(context).then(html => {
    html = template.replace(
      /<!--\[if ([A-Za-z]+)\]><!\[endif\]-->/gm,
      (str, group) => context[group]()
    ).replace(/<div id=(app|"app")><\/div>/m, html)
    return fse.outputFile(
      path.join(__dirname, '..', _path === '/' ? '' : _path, '/index.html'),
      html || minify(html, {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        removeAttributeQuotes: true
      })
    )
  })
}

Promise.all([
  '/', '/about', '/music'
].map(renderRoute)).then(() => {
  console.log('ssr done!')
}).catch(err => {
  console.error(err)
}).finally(() => {
  _server.close()
})
