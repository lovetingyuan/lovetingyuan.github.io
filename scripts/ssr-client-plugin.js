const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = class SSRClientPlugin {
  constructor (options) {
    this.userOptions = options
  }
  apply (compiler) {
    (new VueSSRClientPlugin({
      filename: 'ssr/vue-ssr-client-manifest.json'
    })).apply(compiler)
    const id = SSRClientPlugin.name
    compiler.hooks.afterEnvironment.tap(id, () => { // make sure called after VueSSRServerPlugin
      compiler.hooks.emit.tapAsync(id, (compilation, cb) => {
        let manifest = JSON.parse(
          compilation.assets['ssr/vue-ssr-client-manifest.json'].source()
        )
        manifest.all = manifest.all.filter(v => !v.endsWith('.css.map'))
        Object.keys(manifest.modules).forEach(moduleId => {
          manifest.modules[moduleId] = manifest.modules[moduleId].filter(v => v !== -1)
        })
        if (typeof this.userOptions === 'function') {
          this.userOptions(manifest)
        } else if (this.userOptions && typeof this.userOptions === 'object') {
          Object.assign(manifest, this.userOptions)
        }
        manifest = JSON.stringify(manifest)
        compilation.assets['ssr/vue-ssr-client-manifest.json'] = {
          source () { return manifest },
          size () { return manifest.length }
        }
        cb()
      })
    })
  }
}
