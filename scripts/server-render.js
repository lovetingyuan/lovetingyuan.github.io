const createApp = require('../main').default
const path = require('path')
const fse = require('fs-extra')
const renderer = require('vue-server-renderer').createRenderer()

global.fetch = require('node-fetch')

const express = require('express')
const server = express()
const port = 3000

server.use('/data', express.static(path.join(__dirname, '../data')))

const _server = server.listen(port, () => console.log(`Example app listening on port ${port}!`))
const indexPath = path.join(__dirname, '../index.html')
const template = fse.readFileSync(indexPath, 'utf8')

function renderRoute(url) {
  return createApp({
    url,
    origin: 'http://localhost:' + port
  }).then(app => {
    return renderer.renderToString(app)
  }).then(html => {
    return fse.outputFile(
      path.join(__dirname, '..', url === '/' ? '' : url, '/index.html'),
      template.replace(/<div id="app"[\s\S]+<\/div>\s*<script src="/, html + '<script src="')
    )
  })
}

Promise.all([
  '/', '/about'
].map(renderRoute)).catch(err => {
  console.error(err)
}).finally(() => {
  _server.close()
})

