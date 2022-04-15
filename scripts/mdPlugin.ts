import { readFileSync } from 'fs'
import type { Plugin } from 'vite'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})
export default (): Plugin => {
  return {
    name: 'md-plugin',
    load(id) {
      if (id.endsWith('.md')) {
        const code = readFileSync(id, 'utf-8')
        const src = JSON.stringify(md.render(code))
        return (
          `export default ${src};\n` +
          `
        if (import.meta.hot) {
          import.meta.hot.accept((m) => {
            window.dispatchEvent(new CustomEvent('__hotUpdateBlog', {
              detail: [import.meta, m],
            }));
          })
        }
        `
        )
      }
    },
  }
}
