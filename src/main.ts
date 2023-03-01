import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import createRouter from './router'
import './style.css'
import 'balloon-css'

export default function start() {
  const app = (import.meta.env.PROD ? createSSRApp : createApp)(App)
  // const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  // app.config.warnHandler = (msg, instance, trace) => {
  //   // `trace` is the component hierarchy trace
  //   console.log(msg, instance, trace)
  // }
  return {
    app,
    router,
  }
}

if (!import.meta.env.SSR) {
  const { app, router } = start()
  router.isReady().then(() => {
    app.mount('#app')
  })
  import('./pwa')
}
