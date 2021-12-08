import { readFileSync } from 'fs'
import { marked } from 'marked'
import { Plugin } from 'vite'

export default () => {
  return {
    name: 'md-plugin',
    load(id) {
      if (id.endsWith('.md')) {
        const code = readFileSync(id, 'utf-8')
        const src = JSON.stringify(marked(code))
        return `export default ${src};\n` + `
        if (import.meta.hot && window._hotUpdateBlog) {
          import.meta.hot.accept((m) => {
             window._hotUpdateBlog(import.meta, m)
          })
        }
        `.replace(/\s/g, '')
      }
    },
  } as Plugin
}
