/* eslint-disable */
const webpack = require('webpack')
const path = require('path')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  lintOnSave: false,
  outputDir: 'dist/ssr',
  productionSourceMap: false,
  filenameHashing: false,
  css: {
    extract: false
  },
  configureWebpack: {
    context: path.resolve(__dirname, '../'),
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
      minimizer: [],
      splitChunks: false
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV === 'development',
        'process.env': {
          SERVER_SSR: true
        }
      }),
      new VueSSRServerPlugin(),
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
  }
}
