import './assets/style.css'

import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import createRouter from './router'

export default function start() {
  // _ssrPage 表示是ssr预渲染的页面
  const createVueApp = import.meta.env.SSR || window._ssrPage ? createSSRApp : createApp
  const app = createVueApp(App)
  const router = createRouter()
  app.use(router)
  app.config.warnHandler = (msg, instance, trace) => {
    // `trace` is the component hierarchy trace
    console.log('[Vue warn]:', msg, instance, trace)
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
  import('./pwa')
}
