const webpack = require('webpack')
const gitHash = require('git-rev-sync').short(null, 10)
const path = require('path')
const fse = require('fs-extra')
const webManifest = fse.readJSONSync(require.resolve('./public/site.webmanifest'))

process.env.VUE_APP_THEME_COLOR = webManifest.theme_color

const productionSourceMap = false

function serverConfig () {
  const nodeExternals = require('webpack-node-externals')
  const SSRenderPlugin = require('./scripts/ssr-render-plugin')
  return {
    lintOnSave: false,
    outputDir: 'dist/ssr',
    assetsDir: 'assets',
    productionSourceMap,
    css: {
      extract: false
    },
    configureWebpack: {
      target: 'node',
      devtool: 'source-map',
      output: {
        libraryTarget: 'commonjs2'
      },
      externals: nodeExternals({
        whitelist: [/\.(css|svg)$/, /register-service-worker/]
      }),
      optimization: {
        minimize: false,
        splitChunks: false
      },
      plugins: [
        new webpack.DefinePlugin({
          __DEV__: process.env.NODE_ENV === 'development',
          'process.env': {
            VUE_ENV: JSON.stringify(process.env.VUE_ENV)
          }
        }),
        new SSRenderPlugin({
          routes: ['/', '/blog', '/music', '/movie', '/spirit'],
          serverBundlePath: 'dist/ssr/vue-ssr-server-bundle.json',
          clientManifestPath: 'dist/ssr/vue-ssr-client-manifest.json',
          apiPath: 'public/data',
          templatePath: 'dist/index.html',
          swPath: 'dist/service-worker.js'
        })
      ]
    },
    chainWebpack (config) {
      [
        'friendly-errors', 'hmr', 'progress', 'copy', 'html', 'prefetch',
        'preload', 'pwa', 'workbox', 'hash-module-ids', 'named-chunks'
      ].forEach(name => {
        config.plugins.delete(name)
      })
      config.module.rule('js').uses.delete('babel-loader')
      config.module
        .rule('markdown')
        .test(/\.md$/)
        .use('html-loader')
        .loader('html-loader')
        .end()
        .use('markdown-loader')
        .loader('markdown-loader')
        .end()
    }
  }
}

function clientConfig () {
  const PostBuildPlugin = require('./scripts/post-build-plugin')
  const SSRClientPlugin = require('./scripts/ssr-client-plugin')
  const CustomHtmlPlugin = require('./scripts/custom-html-plugin')
  return {
    lintOnSave: false,
    assetsDir: 'assets',
    productionSourceMap,
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
      assetsVersion: 'v' + process.env.npm_package_version,
      // manifestPath: 'site.webmanifest',
      manifestOptions: webManifest,
      workboxOptions: {
        precacheManifestFilename: './assets/precache/precache-manifest.[manifestHash].js',
        importWorkboxFrom: 'disabled',
        importScripts: 'https://cdn.jsdelivr.net/npm/workbox-sw@3.6.3/build/workbox-sw.min.js',
        // ignoreUrlParametersMatching: [/^v/],
        ignoreURLParametersMatching: [/^v/],
        exclude: 'index.html'
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
            'ssr', 'report.html', 'legacy-report.html', 'legacy-assets-index.html.json'
          ]
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
              process.env.npm_package_name, process.env.npm_package_version, Date.now(), gitHash
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
}

module.exports = () => {
  return process.env.VUE_ENV === 'server' ? serverConfig() : clientConfig()
}
