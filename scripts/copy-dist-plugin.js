const fse = require('fs-extra')
const path = require('path')
const marked = require('marked')

module.exports = class CopyDistPlugin {
  constructor () {
    this.dest = path.join(__dirname, '..')
    this.cleanList = [ 'assets' ]
    this.ignoreCopyList = [
      'ssr', 'report.html', 'legacy-report.html', 'legacy-assets-index.html.json'
    ]
  }
  apply (compiler) {
    this.clean()
    this.copyDist(compiler)
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
    compiler.hooks.emit.tapAsync('minify-data-json', (compilation, cb) => {
      Object.keys(compilation.assets)
        .forEach(file => {
          if (!file.startsWith('data/')) return
          if (file.endsWith('.json')) {
            let source = compilation.assets[file].source()
            source = JSON.stringify(JSON.parse(source.toString()))
            compilation.assets[file] = {
              source () { return source },
              size () { return source.length }
            }
          } else if (file.endsWith('.md')) {
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
