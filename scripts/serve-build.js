const Service = require('@vue/cli-service/lib/Service')
const chalk = require('chalk')
const path = require('path')
const webpack = require('webpack')
const MFS = require('memory-fs')
const { createBundleRenderer } = require('vue-server-renderer')
const minimist = require('minimist')
const fse = require('fs-extra')
const express = require('express')
const lodashTemplate = require('lodash/template')

const serverVueConfigPath = require.resolve('./vue.ssr.config')

const SSRoutes = [
  '/',
  '/movie',
  '/music',
  '/spirit'
]

function createService (configPath) {
  if (configPath) {
    process.env.VUE_CLI_SERVICE_CONFIG_PATH = configPath
  } else {
    delete process.env.VUE_CLI_SERVICE_CONFIG_PATH
  }

  const service = new Service(path.resolve(__dirname, '../'))

  let rawArgv = process.argv.slice(2)
  if (configPath === serverVueConfigPath) {
    rawArgv = rawArgv.filter(v => v !== '--modern')
    rawArgv.push('--no-clean')
  }

  const args = minimist(rawArgv, {
    boolean: [
      // build
      'modern',
      'report',
      'report-json',
      'watch',
      // serve
      'open',
      'copy',
      'https',
      // inspect
      'verbose'
    ]
  })

  service._run = service.run.bind(service, args._[0], args, rawArgv)
  service.init(process.env.NODE_ENV)
  return service
}

function serve () {
  if (process.argv.includes('--no-ssr')) {
    return createService()._run()
  }
  let serverBundle
  let clientManifest
  let renderer

  const serverService = createService(serverVueConfigPath)
  const webpackConfig = serverService.resolveWebpackConfig()

  const serverCompiler = webpack(webpackConfig)
  const mfs = new MFS()
  serverCompiler.outputFileSystem = mfs
  serverCompiler.watch({}, (err, stats) => {
    if (err) throw err
    stats = stats.toJson()
    if (stats.errors.length) {
      console.log()
      console.error(chalk.red(stats.errors))
      return
    }
    const bundlePath = path.join(webpackConfig.output.path, 'vue-ssr-server-bundle.json')
    serverBundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf8'))
    console.log()
    console.log('server bundle done')
    updateRenderer()
  })

  function updateRenderer () {
    if (clientManifest && serverBundle) {
      console.log()
      console.log('created renderer')
      const templatePath = path.join(__dirname, '../public/index.html')
      const template = fse.readFileSync(templatePath, 'utf8')
        .replace('<div id="app"></div>', '<!--vue-ssr-outlet-->')
      const compiled = lodashTemplate(template)
      try {
        renderer = createBundleRenderer(serverBundle, {
          template: compiled({ BASE_URL: clientManifest.publicPath }),
          runInNewContext: false,
          clientManifest
        })
      } catch (err) {
        console.error('renderer error: ', err)
        throw err
      }
      console.log(chalk.cyan('SSR renderer generated!'))
    }
  }

  const clientService = createService()
  clientService.devServerConfigFns.unshift(function (app, server) {
    const name = 'ssr/vue-ssr-client-manifest.json'
    server.compiler.hooks.afterEmit.tap(name, compilation => {
      console.log()
      console.log('client manifest done')
      const _clientManifest = compilation.assets[name].source()
      clientManifest = JSON.parse(_clientManifest)
      updateRenderer()
    })

    app.get(SSRoutes, function (req, res, next) {
      if (renderer) {
        renderer.renderToString({
          url: req.url,
          publicPath: clientManifest.publicPath,
          SSR_CONTEXT: clientManifest.SSR_CONTEXT
        }, (err, html) => {
          if (err) {
            console.error('renderer callback error', err)
            next(err)
          } else {
            res.send(html)
          }
        })
      } else {
        next(new Error('ssr renderer is not initialized!'))
      }
    })
  })
  return clientService._run()
}

async function build () {
  await createService()._run()
  await createService(serverVueConfigPath)._run()

  const serverBundle = require('../dist/ssr/vue-ssr-server-bundle')
  const clientManifest = require('../dist/ssr/vue-ssr-client-manifest')

  const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    clientManifest
  })

  const server = express()
  const template = fse.readFileSync(path.join(__dirname, '../index.html'), 'utf8')

  server.use('/src/data', express.static(path.join(__dirname, '../src/data')))
  const _server = server.listen(8081)

  await Promise.all(SSRoutes.map(async _path => {
    const context = {
      url: _path,
      publicPath: clientManifest.publicPath,
      SSR_CONTEXT: clientManifest.SSR_CONTEXT
    }
    let html = await renderer.renderToString(context)
    html = template.replace(
      /<!--\[if ([A-Za-z]+)\]><!\[endif\]-->/gm,
      (str, group) => context[group]()
    ).replace(/<div id=(app|"app")><\/div>/m, html)
    await fse.outputFile(
      path.join(__dirname, '..', _path === '/' ? '' : _path, '/index.html'),
      html
    )
  }))
  console.log(chalk.green('Build done!'))
  _server && _server.close()
}

if (require.main === module) {
  if (process.env.NODE_ENV === 'development') {
    serve()
  } else {
    build()
  }
}

module.exports = { serve, build }
