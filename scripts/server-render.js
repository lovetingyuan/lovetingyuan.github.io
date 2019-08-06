const createApp = require('../main').default
const path = require('path')
const fse = require('fs-extra')
const critical = require('critical')
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
  const dist = path.join(__dirname, '..', url === '/' ? '' : url, '/index.html')
  const href = 'http://localhost:' + port + url
  return createApp({
    url,
    origin: 'http://localhost:' + port
  }).then(app => {
    return renderer.renderToString(app)
  }).then(html => {
    const resultHtml = template.replace(/<div id="app"[\s\S]+<\/div>\s*<script src="/, html + '<script src="')
    return fse.outputFile(dist, resultHtml)
    
    // return critical.generate({
    //   base: path.resolve(__dirname, '../'),
    //   html: resultHtml,
    //   width: 2100,
    //   height: 1200,
    //   // target: 'index-critical.html',
    //   inline: true,
    //   // request: true,
    //   penthouse: {
    //     timeout: 30000,
    //     blockJSRequests: false
    //   }
    //   // timeout: 3000,
    // });
    
  }).then(res => {
    const penthouse = require('penthouse')
    console.log(99, fse.readdirSync(path.join(__dirname, '../')).filter(v => {
      return v.endsWith('.css')
    }).map(file => {
      return fse.readFileSync(path.join(__dirname, '../', file), 'utf8')
    }).join('\n'))
    return penthouse({
      url: href,
      blockJSRequests: false,
      cssString: fse.readdirSync(path.join(__dirname, '../')).filter(v => {
        return v.endsWith('.css')
      }).map(file => {
        return fse.readFileSync(path.join(__dirname, '../', file), 'utf8')
      }).join('\n')
    })
    .then(criticalCss => {
      // use the critical css
      console.log(criticalCss)
    })
    // return fse.outputFile(
    //   path.join(__dirname, '..', url === '/' ? '' : url, '/index.html'),
    //   res.html
    // )
  })
}

Promise.all([
  '/', '/about'
].map(renderRoute)).catch(err => {
  console.error(err)
}).finally(() => {
  _server.close()
})

