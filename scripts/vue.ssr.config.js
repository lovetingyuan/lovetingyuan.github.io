/* eslint-disable */
const webpack = require('webpack')
const path = require('path')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  lintOnSave: false,
  outputDir: 'dist/ssr',
  assetsDir: 'assets',
  productionSourceMap: false,
  css: {
    extract: false
  },
  configureWebpack: {
    context: path.resolve(__dirname, '../'),
    // entry: {
    //   app: [ // keep same with vue-cli default entry setting
    //     './src/ssr-main.js'
    //   ]
    // },
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
          SERVER_SSR: true
        }
      }),
      new VueSSRServerPlugin(),
    ]
  },
  chainWebpack (config) {
    config.plugins.delete('friendly-errors')
    config.plugins.delete('hmr')
    config.plugins.delete('progress')
    config.module.rule('js').uses.delete('babel-loader')
  }
}
