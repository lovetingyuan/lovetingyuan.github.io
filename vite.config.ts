import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import Vue from '@vitejs/plugin-vue'
// import VueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-vue-markdown'
import Shiki from 'markdown-it-shiki'
import container from 'markdown-it-container'
import LinkAttributes from 'markdown-it-link-attributes'
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
      // disable: true,
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
      manifest: {
        name: 'tingyuan',
        short_name: 'tingyuan',
        description: '庭院的个人网站',
        lang: 'zh-CN',
        background_color: '#fffafa',
        theme_color: '#fffafa',
        display: 'standalone',
        scope: './',
        start_url: './',
        icons: [
          {
            src: 'icons/icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icons/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable any',
          },
        ],
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
      dts: false,
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
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),
    preRender({
      routes: ['/', '/blog', '/music', '/movie'],
    }),
    injectBuildInfo(),
  ],
}))
