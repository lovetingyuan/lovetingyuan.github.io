const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
// const gitHash = require('git-rev-sync').short(null, 10)
// const { name: appName, version: appVersion } = require('../package.json')

module.exports = class SSRClientPlugin {
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
        manifest.SSR_CONTEXT = {
          // BASE_URL: process.env.VUE_APP_PUBLIC_PATH,
          // HEAD_TAGS: [
          //   '<meta name="robots" content="noindex">',
          //   `<meta name="datePublished" content="${[
          //     appName, appVersion, Date.now(), gitHash
          //   ]}">`
          // ],
        }
        manifest.all = manifest.all.filter(v => !v.endsWith('.css.map'))
        Object.keys(manifest.modules).forEach(moduleId => {
          manifest.modules[moduleId] = manifest.modules[moduleId].filter(v => v !== -1)
        })
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
