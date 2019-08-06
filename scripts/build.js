
/* eslint-disable */
const Service = require('@vue/cli-service/lib/Service')
const chalk = require('chalk')
const path = require('path')
const webpack = require('webpack')
const MFS = require('memory-fs')
const { createBundleRenderer } = require('vue-server-renderer')
const minimist = require('minimist')
const fs = require('fs')

const SSRoutes = [
  '/',
  '/about'
]

function createService (cmd, config) {
  if (config) {
    process.env.VUE_CLI_SERVICE_CONFIG_PATH = config
  } else {
    delete process.env.VUE_CLI_SERVICE_CONFIG_PATH
  }

  const service = new Service(path.resolve(__dirname, '../'))

  const rawArgv = process.argv.slice(2)
  rawArgv.unshift(cmd)

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

  const command = args._[0]
  service._run = service.run.bind(service, command, args, rawArgv)
  service.init(process.env.NODE_ENV)
  return service
}

const serverVueConfigPath = path.join(__dirname, 'vue.ssr.config.js')
const templatePath = path.join(__dirname, '../public/ssr/index.html')

function serve () {
  let serverBundle
  let clientManifest
  let renderer

  const serverService = createService('serve', serverVueConfigPath)
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
    // fs.writeFileSync('./server-bundle.json', mfs.readFileSync(bundlePath, 'utf8'))
    serverBundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf8'))
    console.log()
    console.log('server bundle done')
    updateRenderer()
  })

  function updateRenderer () {
    if (clientManifest && serverBundle) {
      console.log()
      console.log('created renderer')
      try {
        renderer = createBundleRenderer(serverBundle, {
          template: fs.readFileSync(templatePath, 'utf8'),
          runInNewContext: false,
          clientManifest
        })
      } catch(err) {
        console.error('renderer error: ', err)
        throw err
      }
      console.log(chalk.cyan('SSR renderer generated!'))
    }
  }

  const clientService = createService('serve')
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
        renderer.renderToString({ url: req.url, SSR_CONTEXT: clientManifest.SSR_CONTEXT }, (err, html) => {
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
  return clientService._run().then(({ server, url }) => {
    console.log('Done, start at: ' + chalk.green(url))
  })
}

function build () {
  return Promise.all([
    createService('build'),
    createService('build', serverVueConfigPath)
  ].map(service => service._run())).then(() => {
    console.log(chalk.green('Build done!'))
  }).catch(err => {
    console.error(err)
    process.exit(-1)
  })
}

if (require.main === module) {
  if (process.env.NODE_ENV === 'development') {
    serve()
  } else {
    build()
  }
}
