import type { Plugin, ResolvedConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import workerpool from 'workerpool'
/**
 * https://cn.vitejs.dev/guide/ssr.html#pre-rendering--ssg
 * 注意：先进行ssr构建，再进行普通构建
 */
export default (options?: {
  routes?: string[]
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
      type Asset = Extract<(typeof bundle)[string], { type: 'asset' }>
      const routesToPrerender = options?.routes || []
      const indexBundle = bundle['index.html'] as Asset
      if (!indexBundle || !fs.existsSync(ssrEntry)) return
      const indexHtml = indexBundle.source.toString()
      // const { render } = (await import(pathToFileURL(ssrEntry).toString())) as { render: ServerRender }
      await Promise.all(
        routesToPrerender.map(async (url) => {
          let fileName = url === '/' ? 'index.html' : url.endsWith('.html') ? url : url + '.html'
          if (fileName[0] === '/') {
            fileName = fileName.slice(1)
          }
          if (fileName !== 'index.html' && fileName in bundle) return
          const pool = workerpool.pool(ssrEntry)
          await pool.exec('setHtml', [indexHtml])
          await pool.exec('render', [url])
          bundle[fileName] = {
            type: 'asset',
            name: undefined,
            source: await pool.exec('getHtml', null),
            fileName,
            needsCodeReference: false,
          }
          pool.terminate() // terminate all workers when done
        })
      )
    },
  }
}