import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import Vue from '@vitejs/plugin-vue'
import buildInfo from './scripts/buildInfo'
import Markdown from 'vite-plugin-vue-markdown'
import Shiki from 'markdown-it-shiki'
import container from 'markdown-it-container'
import Icons from 'unplugin-icons/vite'
import mdDetail from './scripts/markdown-detail'
import VueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    VueJsx(),
    Icons({
      compiler: 'vue3',
    }),
    Markdown({
      wrapperClasses: 'markdown-body',
      markdownItSetup(md) {
        md.use(container, 'detail', mdDetail)
        md.use(Shiki, {
          theme: 'dark-plus',
        })
      },
    }),
    buildInfo(),
  ],
})
