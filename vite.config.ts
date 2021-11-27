import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFileSync } from 'fs'
import {marked} from 'marked'

const md = () => {
  return {
    name: 'md-plugin',
    transformIndexHtml(html) {
      const buildTime = new Intl.DateTimeFormat('zh', {
        year: 'numeric',  
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date())
      return {
        html,
        tags: [{
          tag: 'script',
          injectTo: 'body',
          children: `console.log("%c Build: ${buildTime} ","background-color:#4DBA87;color:#fff;padding:1px 2px;border-radius:2px")
          `
        }]
      }
    },
    load(id) {
      if (id.endsWith('.md')) {
        const code = readFileSync(id, 'utf-8')
        const src = JSON.stringify(marked(code))
        return `export default ${src};\n` + `
        if (import.meta.hot) {
          import.meta.hot.accept((m) => {
            window._hotUpdateBlog && window._hotUpdateBlog(import.meta, m)
          })
        }
        `.replace(/\s/g, '')
      }
    },
  } as Plugin
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs'
  },
  plugins: [vue(), md()]
})
