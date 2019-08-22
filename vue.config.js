const webpack = require('webpack')
const SSRClientPlugin = require('./scripts/ssr-client-plugin')
const gitHash = require('git-rev-sync').short(null, 10)
const { name: appName, version: appVersion } = require('./package.json')
const PostBuildPlugin = require('./scripts/post-build-plugin')
const CustomHtmlPlugin = require('./scripts/custom-html-plugin')
const path = require('path')
const fse = require('fs-extra')
const webManifest = fse.readJSONSync(require.resolve('./public/site.webmanifest'))

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
      precacheManifestFilename: './precache/precache-manifest.[manifestHash].js',
      importWorkboxFrom: 'disabled',
      importScripts: 'https://cdn.jsdelivr.net/npm/workbox-sw@3.6.3/build/workbox-sw.min.js',
      ignoreUrlParametersMatching: [/^v/]
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
      process.env.NODE_ENV === 'production' && new PostBuildPlugin({
        dest: __dirname,
        cleanList: ['assets', 'data'],
        ignoreCopyList: [
          'ssr', 'precache', 'report.html', 'legacy-report.html', 'legacy-assets-index.html.json'
        ],
        extraPrecacheList: ['music', 'blog', 'movie', 'spirit'].map(route => {
          return {
            file: path.join(__dirname, route, 'index.html'),
            url: route + '/index.html'
          }
        })
      }),
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV === 'development',
        'process.env': {
          VUE_ENV: false
        }
      }),
      new CustomHtmlPlugin({
        svgSpriteDir: path.join(__dirname, 'src/assets/svg')
      }),
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
    // we use vue ssr renderResourceHints to inject pre links
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}
