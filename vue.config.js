const webpack = require('webpack')
const SSRClientPlugin = require('./scripts/ssr-client-plugin')
const gitHash = require('git-rev-sync').short(null, 10)
const { name: appName, version: appVersion } = require('./package.json')
const CopyDistPlugin = require('./scripts/copy-dist-plugin')
const InlinePlugin = require('./scripts/inline-html-plugin')
const path = require('path')
const fse = require('fs-extra')
const webManifest = fse.readJSONSync(require.resolve('./public/site.webmanifest'))
const crypto = require('crypto')
const hash = (txt) => {
  return crypto.createHash('sha256').update(txt).digest('hex')
}

process.env.VUE_APP_THEME_COLOR = webManifest.theme_color

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
    manifestPath: 'site.webmanifest',
    workboxOptions: {
      precacheManifestFilename: './assets/precache/precache-manifest.[manifestHash].js',
      importWorkboxFrom: 'disabled',
      importScripts: 'https://cdn.jsdelivr.net/npm/workbox-sw@3.6.3/build/workbox-sw.min.js',
      manifestTransforms: [
        manifest => {
          ['music', 'blog', 'movie', 'spirit'].forEach(route => {
            const index = fse.readFileSync(path.join(__dirname, route, 'index.html'), 'utf8')
            const revision = hash(index).substr(0, 20)
            manifest.push({
              revision, url: '/' + route + '/index.html'
            })
          })
          return { manifest }
        }
      ]
    },
    iconPaths: {
      favicon32: 'assets/icons/favicon-32x32.png',
      favicon16: 'assets/icons/favicon-16x16.png',
      appleTouchIcon: 'assets/icons/apple-icon-180x180.png',
      maskIcon: 'assets/icons/safari-pinned-tab.svg',
      msTileImage: 'assets/icons/ms-icon-144x144.png'
    },
    themeColor: process.env.VUE_APP_THEME_COLOR
  },
  configureWebpack: {
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      }
    },
    resolve: {
      modules: [
        path.join(__dirname, './public/data')
      ]
    },
    plugins: [
      process.env.NODE_ENV === 'production' && new CopyDistPlugin(),
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV === 'development',
        'process.env': {
          VUE_ENV: false
        }
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
        return args
      })
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}
