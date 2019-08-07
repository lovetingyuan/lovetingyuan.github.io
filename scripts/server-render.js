const fse = require('fs-extra')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')

const serverBundle = require('../dist/ssr/vue-ssr-server-bundle')
const clientManifest = require('../dist/ssr/vue-ssr-client-manifest')

const renderer = createBundleRenderer(serverBundle, {
  template: fse.readFileSync(path.join(__dirname, '../dist/ssr/index.html'), 'utf8'),
  runInNewContext: false,
  clientManifest
})

const express = require('express')
const server = express()
const port = 8081
const { minify } = require('html-minifier')

server.use('/data', express.static(path.join(__dirname, '../data')))
const _server = server.listen(port)

function renderRoute (_path) {
  const context = {
    url: _path,
    publicPath: clientManifest.publicPath,
    SSR_CONTEXT: clientManifest.SSR_CONTEXT
  }
  return renderer.renderToString(context).then(html => {
    return fse.outputFile(
      path.join(__dirname, '..', _path === '/' ? '' : _path, '/index.html'),
      minify(html, {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        removeAttributeQuotes: true
      })
    )
  })
}

Promise.all([
  '/', '/about'
].map(renderRoute)).then(() => {
  console.log('ssr done!')
}).catch(err => {
  console.error(err)
}).finally(() => {
  _server.close()
})
