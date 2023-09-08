import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import Shiki from 'markdown-it-shiki'
import container from 'markdown-it-container'
import LinkAttributes from 'markdown-it-link-attributes'
// import Icons from 'unplugin-icons/vite'
import mdDetail from './scripts/markdown-detail'
// import IconsResolver from 'unplugin-icons/resolver'
// import Components from 'unplugin-vue-components/vite'
import preRender from './scripts/prerender'
import injectBuildInfo from './scripts/build-info'
import getPWAConfig from './scripts/pwa-plugin'

// https://vitejs.dev/config/
export default defineConfig((env) => ({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    copyPublicDir: !env.ssrBuild,
    minify: !env.ssrBuild
    // rollupOptions: {
    //   external: ['vue'],
    //   // https://rollupjs.org/configuration-options/
    // },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => {
            if (tag === 'iconify-icon') {
              return true
            }
            return false
          }
        }
      }
    }),
    getPWAConfig(!!env.ssrBuild),
    // Components({
    //   resolvers: [
    //     IconsResolver({
    //       prefix: 'icon' // <--
    //     })
    //   ],
    //   dts: false
    // }),
    // Icons({
    //   compiler: 'vue3',
    //   defaultClass: 'g-un-icons'
    // }),
    Markdown({
      wrapperClasses: 'markdown-body',
      markdownItSetup(md) {
        md.use(container, 'detail', mdDetail)
        md.use(Shiki, {
          theme: 'dark-plus'
        })
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
      routes: ['/', '/404', '/blog', '/music', '/movie', '/ppp']
    })
  ]
}))
