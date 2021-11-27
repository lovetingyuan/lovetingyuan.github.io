import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFileSync } from 'fs'
import {marked} from 'marked'

const md = () => {
  return {
    name: 'md-plugin',
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
    // generateBundle(options, bundles) {
    //   Object.keys(bundles).forEach(f => {
    //     const bundle = bundles[f];
    //     if (bundle.type === 'chunk' && (bundle.facadeModuleId || '').endsWith('.md')) {
    //       delete bundles[f]
    //     }
    //   })
    // },
  } as Plugin
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs'
  },
  plugins: [vue(), md()]
})
