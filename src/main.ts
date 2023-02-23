import { createApp } from 'vue'
import App from './App.vue'
import createRouter from './router'
import './style.css'
import 'balloon-css'
import './pwa'

const app = createApp(App)
const router = createRouter()
app.use(router)
app.mount('#app')

// export default function start() {
//   const app = createApp(App)
//   const router = createRouter()
//   app.use(router)
//   app.mount('#app')
//   return app
// }
