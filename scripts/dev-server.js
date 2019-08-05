const Bundler = require('parcel-bundler')
const express = require('express')

const bundler = new Bundler('src/index.html', {
  cache: false
})

const port = Number(process.env.PORT || 1234)

const app = express()

app.use((req, res, next) => {
  if (req.url.startsWith('/data/') && req.url.endsWith('.json')) {
    res.json(require('..' + req.url))
  } else {
    next()
  }
})

app.use(bundler.middleware())

app.listen(port)
