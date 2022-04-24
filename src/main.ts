import { createApp } from 'vue'
import App from './App.vue'
import createRouter from './router'
import './style.css'

const app = createApp(App)
app.use(createRouter())
app.mount('#app')

if (import.meta.env.DEV) {
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      const details = document.getElementsByTagName('details')
      Array.from(details).forEach((detail) => {
        detail.setAttribute('open', '')
      })
    }
  })
}
