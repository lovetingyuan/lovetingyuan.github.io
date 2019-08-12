/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = class InlintManifestPlugin {
  apply (compiler) {
    const name = 'inline-manifest-plugin'
    compiler.hooks.compilation.tap(name, compilation => {
      (
        HtmlWebpackPlugin.getHooks
          ? HtmlWebpackPlugin.getHooks(compilation).alterAssetTags
          : compilation.hooks.htmlWebpackPluginAlterAssetTags
      ).tapAsync(
        name,
        (data, cb) => { this.inlineManifest(compilation, data, cb) }
      )
    })
  }
  inlineManifest (compilation, data, callback) {
    const manifestReg = /\/manifest.+\.js$/
    const manifestIndex = data.body.findIndex(tag => {
      return tag.tagName === 'script' && manifestReg.test(tag.attributes.src)
    })
    if (manifestIndex !== -1) {
      for (let headTag of data.head) {
        const { tagName, attributes: { href } } = headTag
        if (tagName === 'link' && manifestReg.test(href)) { // remove preload manifest.js
          const prefixPath = href.slice(0, href.indexOf('manifest'))
          Object.keys(headTag).forEach(k => delete headTag[k])
          headTag.tagName = 'script'
          const manifestName = Object.keys(compilation.assets).filter(name => manifestReg.test(name))[0]
          let content = compilation.assets[manifestName].source()
          headTag.innerHTML = content.replace(/\/\/# sourceMappingURL=manifest\.[a-z0-9]+\.js\.map/, (str) => {
            return str.replace('manifest', prefixPath + 'manifest')
          })
          headTag.voidTag = false
          data.body.splice(manifestIndex, 1)
          break
        }
      }
    }
    data.head.push(
      ...Object.keys(compilation.assets).map(name => {
        if (name.includes('/critical__')) {
          return {
            tagName: 'link',
            attributes: {
              href: compilation.outputOptions.publicPath + name,
              rel: 'prefetch',
            }
          }
        }
      }).filter(Boolean)
    )
    callback(null, data)
  }
}
