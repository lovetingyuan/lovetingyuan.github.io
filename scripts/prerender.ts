import type { Plugin, ResolvedConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

/**
 * https://cn.vitejs.dev/guide/ssr.html#pre-rendering--ssg
 */
export default (options?: {
  routes?: string[]
  clean?: boolean
  clientDist?: string
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
    async writeBundle() {
      const routesToPrerender = options?.routes || ['/']
      const ssrDist = config.build.outDir
      const ssrEntry = path.resolve(ssrDist, 'server.mjs')
      if (!fs.existsSync(ssrEntry)) return
      const { render } = await import(ssrEntry)
      const clientDist = options?.clientDist || path.resolve(config.root, 'dist')
      const template = fs.readFileSync(path.resolve(clientDist, 'index.html'), 'utf-8')
      const defaultReplaceMark = /<!--ssr-start-->([\s\S]+)<!--ssr-end-->/
      for (const url of routesToPrerender) {
        const html = await render(url)
        const replaceMark = options?.replaceMark || defaultReplaceMark
        const renderedHtml = template.replace(replaceMark, html)
        const filePath = url === '/' ? 'index.html' : url.endsWith('.html') ? url : url + '.html'
        fs.writeFileSync(path.resolve(clientDist, filePath), renderedHtml)
      }
      const clean = options?.clean ?? true
      clean && fs.rmSync(ssrDist, { recursive: true })
      console.log('Pre-rendered done!', routesToPrerender)
    },
  }
}
