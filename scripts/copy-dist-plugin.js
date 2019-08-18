const fse = require('fs-extra')
const path = require('path')

module.exports = class CopyDistPlugin {
  apply (compiler) {
    const dest = path.join(__dirname, '..')
    fse.readdirSync(dest).forEach(file => {
      if (file === 'assets') {
        fse.removeSync(path.join(dest, file))
      }
    })
    compiler.hooks.done.tap('copy-dist-to-root', () => {
      const src = compiler.options.output.path
      fse.readdirSync(src).forEach(file => {
        if (!['ssr', 'report.html', 'legacy-report.html', 'legacy-assets-index.html.json'].includes(file)) {
          fse.copySync(path.join(src, file), path.join(dest, file))
        }
      })
    })
    const ID = 'add-defer-body-scripts'
    compiler.hooks.afterEnvironment.tap(ID, () => {
      compiler.hooks.compilation.tap(ID, compilation => {
        compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(ID, async (data, cb) => {
          data.body.forEach(tag => {
            if (tag.tagName === 'script' && tag.attributes) {
              tag.attributes.defer = ''
            }
          })
          cb()
        })
        compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(ID, data => {
          data.html = data.html.replace(/\sdefer=""\s/gm, ' defer ')
        })
      })
    })
    compiler.hooks.emit.tapAsync('minify-data-json', (compilation, cb) => {
      Object.keys(compilation.assets)
        .filter(file => file.startsWith('data/') && file.endsWith('.json'))
        .forEach(file => {
          let source = compilation.assets[file].source()
          source = JSON.stringify(JSON.parse(source))
          compilation.assets[file] = {
            source () { return source },
            size () { return source.length }
          }
        })
      cb()
    })
  }
}
