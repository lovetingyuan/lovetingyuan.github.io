import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import Vue from '@vitejs/plugin-vue'
// import VueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-vue-markdown'
import Shiki from 'markdown-it-shiki'
import container from 'markdown-it-container'
import Icons from 'unplugin-icons/vite'
import mdDetail from './scripts/markdown-detail'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import preRender from './scripts/prerender'
import injectBuildInfo from './scripts/inject-build-info'

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
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'icon', // <--
        }),
      ],
    }),
    // VueJsx(),
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
    preRender({
      routes: ['/', 'blog', 'music', 'movie'],
    }),
    injectBuildInfo(),
  ],
})
