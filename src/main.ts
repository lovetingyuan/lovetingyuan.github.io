// import 'iconify-icon'
import './assets/style.css'

import { Icon } from '@iconify/vue'
import { createApp, createSSRApp } from 'vue'

import App from './App.vue'
import { createRoute } from './router'

export default function start() {
  // data-ssr 表示是ssr预渲染的页面
  const createVueApp = import.meta.env.SSR || document.body.dataset.ssr ? createSSRApp : createApp
  const app = createVueApp(App)
  const router = createRoute()
  app.use(router)
  app.component('IconifyIcon', Icon)
  app.config.warnHandler = (message, instance, trace) => {
    // `trace` is the component hierarchy trace
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.log('[Vue warn]:', message, instance, trace)
    }
  }
  return {
    app,
    router
  }
}

if (!import.meta.env.SSR) {
  const { app, router } = start()
  router.isReady().then(() => {
    app.mount('#app')
  })
  // eslint-disable-next-line no-console
  console.log(
    // @ts-expect-error this globals is safe
    `%c Build: ${window._buildTime} ${window._buildHash} `,
    'background-color: #4DBA87; color: #fff; padding: 2px; border-radius: 2px;'
  )
  // eslint-disable-next-line no-console
  console.log('https://github.com/lovetingyuan')
}
