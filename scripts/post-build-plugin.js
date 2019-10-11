const fse = require('fs-extra')
const path = require('path')
const marked = require('marked')

module.exports = class PostBuildPlugin {
  constructor (options) {
    Object.assign(this, options)
  }
  apply (compiler) {
    this.clean()
    // this.copyDist(compiler)
    this.optimizeData(compiler)
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
