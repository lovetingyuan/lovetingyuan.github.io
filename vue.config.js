const webpack = require('webpack')
const SSRClientPlugin = require('./scripts/ssr-client-plugin')

module.exports = {
  lintOnSave: false,
  assetsDir: 'assets',
  productionSourceMap: false,
  // outputDir: __dirname,
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
      new SSRClientPlugin()
    ].filter(Boolean)
  }
}
