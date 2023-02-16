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
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig((env) => ({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    copyPublicDir: !env.ssrBuild,
  },
  plugins: [
    VitePWA({
      disable: true,
      // registerType: 'autoUpdate',
      // strategies: 'injectManifest',
      // srcDir: 'src',
      // filename: 'sw.ts',
      // injectManifest: {
      //   globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      // },
      devOptions: {
        enabled: false,
        type: 'module',
        navigateFallback: 'index.html',
        /* other options */
      },
      // includeAssets: ['*.ico', '!js/*.js'],
      // injectManifest: {},
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}'],
        globIgnores: ['js/*.js', 'p.html', 'resume.html', 'saoma.html'],
        // importScripts: ['./a.js'],
        // navigateFallback: 'index.html',
        runtimeCaching: [
          {
            urlPattern: ({ request, url }) => {
              if (request.url.includes('api.faviconkit.com')) {
                return true
              }
              return request.destination === 'image'
            },
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 7 * 24 * 60 * 60,
              },
            },
          },
          {
            urlPattern: ({ request, url }) => {
              return request.destination === 'document'
            },
            handler: 'NetworkFirst',
            options: {
              cacheName: 'html-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
              // expiration: {
              //   maxEntries: 10,
              //   maxAgeSeconds: 7 * 24 * 60 * 60,
              // },
            },
          },
        ],
      },
    }),
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
      routes: ['/', '/blog', '/music', '/movie'],
    }),
    injectBuildInfo(),
  ],
}))
