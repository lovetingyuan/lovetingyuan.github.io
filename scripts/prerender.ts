import type { Plugin, ResolvedConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const defaultReplaceMark = /<!--ssr-start-->([\s\S]+)<!--ssr-end-->/

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
      const { render } = (await import(pathToFileURL(ssrEntry).toString())) as { render: ServerRender }
      await Promise.all(
        routesToPrerender.map(async (url) => {
          let fileName = url === '/' ? 'index.html' : url.endsWith('.html') ? url : url + '.html'
          if (fileName[0] === '/') {
            fileName = fileName.slice(1)
          }
          if (fileName !== 'index.html' && fileName in bundle) return
          let title = ''
          const setTitle = (t: string) => (title = t)
          const html = await render(url, { setTitle })
          const replaceMark = options?.replaceMark || defaultReplaceMark
          const prerenderedHtml = indexHtml
            .replace(/<title>([\s\S]*)<\/title>/, (_, t) => `<title>${title || t}</title>`)
            .replace(replaceMark, html)
          bundle[fileName] = {
            type: 'asset',
            name: undefined,
            source: prerenderedHtml,
            fileName,
            needsCodeReference: false,
          }
        })
      )
    },
  }
}
