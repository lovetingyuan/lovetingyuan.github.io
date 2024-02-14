// https://vite-pwa-org.netlify.app/guide/

import { VitePWA } from 'vite-plugin-pwa'

const config = (ssrBuild: boolean) =>
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
      navigateFallback: 'index.html'
      /* other options */
    },
    manifest: ssrBuild
      ? false
      : {
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
              type: 'image/png'
            },
            {
              src: 'icons/icon-72x72.png',
              sizes: '72x72',
              type: 'image/png'
            },
            {
              src: 'icons/icon-96x96.png',
              sizes: '96x96',
              type: 'image/png'
            },
            {
              src: 'icons/icon-128x128.png',
              sizes: '128x128',
              type: 'image/png'
            },
            {
              src: 'icons/icon-144x144.png',
              sizes: '144x144',
              type: 'image/png'
            },
            {
              src: 'icons/icon-152x152.png',
              sizes: '152x152',
              type: 'image/png'
            },
            {
              src: 'icons/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'icons/icon-384x384.png',
              sizes: '384x384',
              type: 'image/png'
            },
            {
              src: 'icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable any'
            }
          ]
        },
    includeManifestIcons: false,
    // includeAssets: ['humans.txt'],
    // injectManifest: {},
    workbox: {
      // additionalManifestEntries: ['humans.txt'],
      // manifestTransforms: [
      //   (v) => {
      //     return {
      //       manifest: v,
      //     }
      //   },
      // ],
      // modifyURLPrefix: {
      //   '': '',
      // },
      globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}'],
      globIgnores: ['js/*', 'resume.html'],
      navigateFallbackDenylist: [/.+\.txt$/, /\/resume(\.html)?$/, /\/minibili\//, /\.pdf$/],
      disableDevLogs: true,
      // importScripts: ['./a.js'],
      // navigateFallback: '404.html',
      runtimeCaching: [
        {
          urlPattern: ({ request }) => {
            if (request.url.includes('api.faviconkit.com')) {
              return true
            }
            return request.destination === 'image'
          },
          // 'CacheFirst' | 'CacheOnly' | 'NetworkFirst' | 'NetworkOnly' | 'StaleWhileRevalidate';
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cache',
            cacheableResponse: {
              statuses: [0, 200]
            },
            expiration: {
              // maxEntries: 10,
              maxAgeSeconds: 7 * 24 * 60 * 60
            }
          }
        },
        {
          urlPattern: ({ request }) => {
            return request.destination === 'document'
          },
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'html-cache',
            cacheableResponse: {
              statuses: [0, 200]
            },
            expiration: {
              // maxEntries: 10,
              maxAgeSeconds: 7 * 24 * 60 * 60
            }
          }
        }
      ]
    }
  })

export default config
