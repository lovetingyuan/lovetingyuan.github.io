import { createApp } from 'vue'
import App from './App.vue'
import createRouter from './router'
import './style.css'

const app = createApp(App)
app.use(createRouter())
app.mount('#app')
