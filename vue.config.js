module.exports = {
  lintOnSave: false,
  assetsDir: 'assets',
  // outputDir: __dirname,
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
  }
}
