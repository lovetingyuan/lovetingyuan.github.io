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

const a = [1,2,3, null]
const v = a.filter(Boolean)
