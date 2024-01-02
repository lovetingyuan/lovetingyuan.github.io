import { fileURLToPath, URL } from 'node:url'

import Vue from '@vitejs/plugin-vue'
import container from 'markdown-it-container'
import LinkAttributes from 'markdown-it-link-attributes'
// import Shiki from 'markdown-it-shiki'
import Markdown from 'unplugin-vue-markdown/vite'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

import injectBuildInfo from './scripts/build-info'
import mdDetail from './scripts/markdown-detail'
import preRender from './scripts/prerender'
import getPWAConfig from './scripts/pwa-plugin'
// import MarkdownIt from 'markdown-it'
import Shikiji from 'markdown-it-shikiji'

// const md = MarkdownIt()


// https://vitejs.dev/config/
export default defineConfig((environment) => ({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url))
    }
  },
  build: {
    copyPublicDir: !environment.isSsrBuild,
    minify: !environment.isSsrBuild,
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL('index.html', import.meta.url)),
        ppp: fileURLToPath(new URL('ppp.html', import.meta.url))
      }
    }
  },
  plugins: [
    splitVendorChunkPlugin(),
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return ['iconify-icon'].includes(tag)
          }
        }
      }
    }),
    getPWAConfig(!!environment.isSsrBuild),
    Markdown({
      wrapperClasses: 'markdown-body',
      async markdownItSetup(md) {
        md.use(container, 'detail', mdDetail)
        md.use(await Shikiji({
          themes: {
            light: 'github-light',
            dark: 'github-dark',
            // dim: 'github-dimmed',
          }
        }))
        // md.use(Shiki, {
        //   theme: 'dark-plus'
        // })
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        })
      }
    }),
    injectBuildInfo(),
    preRender({
      routes: ['/', '/404', '/blog', '/music', '/movie']
    })
  ]
}))
