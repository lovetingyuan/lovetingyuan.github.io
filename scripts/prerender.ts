import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

import { minify as minifyFn, type Options as MinifyOptions } from 'html-minifier-terser'
import Tinypool from 'tinypool'
import { createLogger, type Plugin, type ResolvedConfig } from 'vite'

const minifyHtmlOptions: MinifyOptions = {
  collapseWhitespace: true,
  keepClosingSlash: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  minifyCSS: true
}

/**
 * https://cn.vitejs.dev/guide/ssr.html#pre-rendering--ssg
 * 注意：先进行ssr构建，再进行普通构建
 */
export default (options?: {
  routes?: Record<string, string> | string[]
  ssrDist?: string
  ssrEntry?: string
}): Plugin => {
  let config: ResolvedConfig
  const defaultPage = 'index.html'
  const logger = createLogger()

  const getRoutes = () => {
    let routesToPrerender = options?.routes || {}
    if (Array.isArray(routesToPrerender)) {
      routesToPrerender = routesToPrerender.reduce(
        (a, b) => {
          a[b] = b === '/' ? defaultPage : (b[0] === '/' ? b.slice(1) : b) + '.html'
          return a
        },
        {} as Record<string, string>
      )
    }
    return Object.entries(routesToPrerender)
  }

  return {
    name: 'prerender-plugin',
    enforce: 'post',
    apply: 'build',
    configResolved(c) {
      config = c
    },
    async generateBundle(_, bundle) {
      if (config.build.ssr) {
        return
      }
      const ssrDistribution = path.resolve(config.root, options?.ssrDist || 'dist-ssr')
      const ssrEntry = path.resolve(ssrDistribution, options?.ssrEntry || 'server.js')
      const indexBundle = bundle[defaultPage]
      if (!indexBundle || !fs.existsSync(ssrEntry) || indexBundle.type !== 'asset') {
        return
      }
      let indexHtml = indexBundle.source.toString()

      if (config.mode === 'production') {
        indexHtml = await minifyFn(indexHtml, minifyHtmlOptions)
      }
      logger.info('\nstart prerender...')
      const workerPool = new Tinypool({
        filename: pathToFileURL(ssrEntry).toString()
      })

      await Promise.all(
        getRoutes().map(async ([route, file]) => {
          if (file !== defaultPage && file in bundle) {
            console.warn(`${file} has been in output assets.`)
            return
          }
          logger.info('prerender: ' + file)
          bundle[file] = {
            type: 'asset',
            name: undefined,
            source: await workerPool.run([route, indexHtml]),
            fileName: file,
            needsCodeReference: false,
            originalFileName: file
          }
        })
      )
      await workerPool.destroy()
      logger.info('prerender done.')
    }
  }
}
