import './assets/style.css'

import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import createRouter from './router'

export default function start() {
  const redirect = location.pathname === '/404.html'
  const app = (import.meta.env.PROD && !redirect ? createSSRApp : createApp)(App)
  // const app = createSSRApp(App)
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
