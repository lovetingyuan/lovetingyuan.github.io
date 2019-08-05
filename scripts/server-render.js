const createApp = require('../main').default
const path = require('path')
const fs = require('fs')
const renderer = require('vue-server-renderer').createRenderer()

global.fetch = require('node-fetch')

const express = require('express')
const server = express()
const port = 3000

server.use('/data', express.static(path.join(__dirname, '../data')))

const _server = server.listen(port, () => console.log(`Example app listening on port ${port}!`))
const indexPath = path.join(__dirname, '../index.html')
const template = fs.readFileSync(indexPath, 'utf8')
const fse = require('fs-extra')

let url = '/'

createApp({
  url,
  origin: 'http://localhost:' + port
}).then(app => {
  return renderer.renderToString(app)
}).then(html => {
  console.log(html)
  fse.outputFileSync(
    path.join(__dirname, '..', url === '/' ? '' : url, '/index.html'),
    template.replace(/<div id="app">(.+?)<\/div>/, html)
  )
}).then(() => {
  url = '/about'
  return createApp({
    url,
    origin: 'http://localhost:' + port
  })
}).then(app => {
  return renderer.renderToString(app)
}).then(html => {
  console.log(html)
  fse.outputFileSync(
    path.join(__dirname, '..', url === '/' ? '' : url, '/index.html'),
    template.replace(/<div id="app">(.+?)<\/div>/, html)
  )
  console.log(path.join(__dirname, '..', url === '/' ? '' : url, '/index.html'), template, html)
}).catch(err => {
  console.error(err)
}).finally(() => {
  _server.close()
})


