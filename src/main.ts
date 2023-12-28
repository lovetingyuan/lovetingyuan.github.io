import 'iconify-icon'
import './assets/style.css'

import { createApp, createSSRApp } from 'vue'

export default async function start() {
  // data-ssr 表示是ssr预渲染的页面
  const createVueApp = import.meta.env.SSR || document.body.dataset.ssr ? createSSRApp : createApp
  const { App, createRoute } = await import('./router')
  const app = createVueApp(App)
  const router = createRoute()
  app.use(router)
  app.config.warnHandler = (message, instance, trace) => {
    // `trace` is the component hierarchy trace
    // eslint-disable-next-line no-console
    console.log('[Vue warn]:', message, instance, trace)
  }

  return {
    app,
    router
  }
}

if (!import.meta.env.SSR) {
  // eslint-disable-next-line no-console
  console.log(
    `%c Build: ${window._buildTime} ${window._buildHash}`,
    'background-color: #4DBA87; color: #fff; padding: 2px; border-radius: 2px;'
  )
  start().then(({ app, router }) => {
    router.isReady().then(() => {
      app.mount('#app')
    })
  })
}
