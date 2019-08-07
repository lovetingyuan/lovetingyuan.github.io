const webpack = require('webpack')
const SSRClientPlugin = require('./scripts/ssr-client-plugin')
const gitHash = require('git-rev-sync').short(null, 10)
const { name: appName, version: appVersion } = require('./package.json')

module.exports = {
  lintOnSave: false,
  assetsDir: 'assets',
  productionSourceMap: false,
  devServer: {
    before (app, server) {
      app.use((req, res, next) => {
        if (req.url.startsWith('/data/') && req.url.endsWith('.json')) {
          res.json(require('.' + req.url))
        } else {
          next()
        }
      })
    }
  },
  configureWebpack: {
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV === 'development'
      }),
      // new InlineManifestPlugin(),
      new SSRClientPlugin({
        appName, appVersion, gitHash
      })
    ].filter(Boolean)
  },
  chainWebpack (config) {
    config
      .plugin('html')
      .tap(args => {
        args[0].meta = {
          datePublished: [
            appName, appVersion, Date.now(), gitHash
          ] + ''
        }
        return args
      })
  }
}
