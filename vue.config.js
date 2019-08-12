const webpack = require('webpack')
const SSRClientPlugin = require('./scripts/ssr-client-plugin')
const gitHash = require('git-rev-sync').short(null, 10)
const { name: appName, version: appVersion } = require('./package.json')
const CopyDistPlugin = require('./scripts/copy-dist-plugin')
const InlinePlugin = require('./scripts/inline-html-plugin')

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
  pwa: {
    assetsVersion: 'v' + appVersion,
    workboxOptions: {
      precacheManifestFilename: './assets/precache/precache-manifest.[manifestHash].js',
      importWorkboxFrom: 'disabled',
      importScripts: 'https://cdn.jsdelivr.net/npm/workbox-sw@3.6.3/build/workbox-sw.min.js'
    },
    iconPaths: {
      favicon32: 'assets/icons/favicon-32x32.png',
      favicon16: 'assets/icons/favicon-16x16.png',
      appleTouchIcon: 'assets/icons/apple-icon-152x152.png',
      maskIcon: 'assets/icons/safari-pinned-tab.svg',
      msTileImage: 'assets/icons/ms-icon-144x144.png'
    }
  },
  configureWebpack: {
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      }
    },
    plugins: [
      process.env.NODE_ENV === 'production' && new CopyDistPlugin(),
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV === 'development'
      }),
      new InlinePlugin(),
      new SSRClientPlugin()
    ].filter(Boolean)
  },
  chainWebpack (config) {
    config
      .plugin('html')
      .tap(args => {
        args[0].meta = Object.assign(args[0].meta || {}, {
          datePublished: [
            appName, appVersion, Date.now(), gitHash
          ] + ''
        })
        args[0].minify = Object.assign(args[0].minify || {}, {
          minifyCSS: true,
          minifyJS: true
        })
        return args
      })
  }
}
