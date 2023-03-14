import type { Plugin, ResolvedConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import Piscina from 'piscina'
import { pathToFileURL } from 'node:url'

/**
 * https://cn.vitejs.dev/guide/ssr.html#pre-rendering--ssg
 * 注意：先进行ssr构建，再进行普通构建
 */
export default (options?: {
  routes?: Record<string, string>
  ssrDist?: string
  ssrEntry?: string
  replaceMark?: RegExp | string
}): Plugin => {
  let config: ResolvedConfig

  return {
    name: 'prerender-plugin',
    enforce: 'post',
    apply: 'build',
    configResolved(c) {
      config = c
    },
    async generateBundle(_, bundle) {
      if (config.build.ssr) return
      const ssrDist = path.resolve(config.root, options?.ssrDist || 'dist-ssr')
      const ssrEntry = path.resolve(ssrDist, options?.ssrEntry || 'server.mjs')
      const routesToPrerender = options?.routes || {}
      const indexBundle = bundle['index.html']
      if (!indexBundle || !fs.existsSync(ssrEntry) || indexBundle.type !== 'asset') return
      const indexHtml = indexBundle.source.toString()
      console.log()
      console.log('start prerender...')
      const piscina = new Piscina({
        filename: pathToFileURL(ssrEntry).toString()
      })
      await Promise.all(
        Object.entries(routesToPrerender).map(async ([route, file]) => {
          if (file !== 'index.html' && file in bundle) return
          console.log('prerender: ' + file)
          const renderedHtml = await piscina.run([route, indexHtml])
          bundle[file] = {
            type: 'asset',
            name: undefined,
            source: renderedHtml,
            fileName: file,
            needsCodeReference: false
          }
        })
      )
      await piscina.destroy()
      console.log('prerender done.')
    }
  }
}
