const fse = require('fs-extra')
const path = require('path')
const marked = require('marked')
const crypto = require('crypto')
const hash = v => crypto.createHash('sha256').update(v).digest('hex')

module.exports = class PostBuildPlugin {
  constructor (options) {
    Object.assign(this, options)
  }
  apply (compiler) {
    this.clean()
    this.copyDist(compiler)
    this.optimizeData(compiler)
    this.inlinePrecacheFiles(compiler)
  }
  clean () {
    fse.readdirSync(this.dest).forEach(file => {
      if (this.cleanList.includes(file)) {
        fse.removeSync(path.join(this.dest, file))
      }
    })
  }
  copyDist (compiler) {
    compiler.hooks.done.tap('copy-dist-to-root', () => {
      const src = compiler.options.output.path
      fse.readdirSync(src).forEach(file => {
        if (!this.ignoreCopyList.includes(file)) {
          fse.copySync(path.join(src, file), path.join(this.dest, file))
        }
      })
    })
  }
  // maybe no need to inline with workbox 5
  inlinePrecacheFiles (compiler) {
    compiler.hooks.emit.tapAsync('inline-precache-files', (compilation, cb) => {
      const { publicPath } = compilation.outputOptions
      const swFileName = 'service-worker.js'
      let swCode = compilation.assets[swFileName].source().toString()
      let precacheFile = Object.keys(compilation.assets).filter(f => {
        return f.includes('precache-manifest.') && swCode.includes(f)
      })[0]
      let precacheCode = compilation.assets[precacheFile].source().toString()
      swCode = swCode.replace(/importScripts\(([\s\S]*?)\)/mg, (str, group) => {
        const scripts = group.split(',')
          .map(v => v.trim().slice(1, -1)) // only keep file path
          .filter(v => v !== publicPath + precacheFile)
        return `importScripts(${JSON.stringify(scripts, null, 2).slice(1, -1)})`
      })
      let extraPrecacheItems = []
      if (this.extraPrecacheList) {
        extraPrecacheItems = this.extraPrecacheList.map(({ url, file }) => {
          return {
            revision: hash(fse.readFileSync(file, 'utf8')).substr(0, 20),
            url: publicPath + url
          }
        })
      }
      const newSource = [
        precacheCode,
        `self.__precacheManifest = ${JSON.stringify(extraPrecacheItems, null, 2)}.concat(self.__precacheManifest || []);`,
        swCode
      ].join('\n\n')
      compilation.assets[swFileName] = {
        source () { return newSource },
        size () { return newSource.length }
      }
      cb()
    })
  }
  optimizeData (compiler) {
    compiler.hooks.emit.tapAsync('opt-data-json-md', (compilation, cb) => {
      const assetsList = Object.keys(compilation.assets)
      assetsList.forEach(file => {
        if (file.startsWith('data/') && file.endsWith('.json')) {
          let source = compilation.assets[file].source()
          source = JSON.stringify(JSON.parse(source.toString()))
          compilation.assets[file] = {
            source () { return source },
            size () { return source.length }
          }
        }
        if (file.startsWith('data/') && file.endsWith('.md')) {
          let source = compilation.assets[file].source()
          source = marked(source.toString())
          compilation.assets[file] = {
            source () { return source },
            size () { return source.length }
          }
        }
      })
      cb()
    })
  }
}
