import { createApp } from 'vue'
import App from './App.vue'
import createRouter from './router'
import './style.css'
import 'balloon-css'

const app = createApp(App)
const router = createRouter({})
app.use(router)
app.mount('#app')

// async function checkUpdate() {
//   const commits = (await fetch('https://api.github.com/repos/lovetingyuan/lovetingyuan.github.io/commits', {
//     headers: {
//       Accept: 'application/vnd.github+json',
//     },
//   }).then((r) => r.json())) as {
//     commit: { message: string }
//     sha: string
//     url: string
//   }[]
//   const {
//     sha,
//     commit: { message },
//   } = commits[0]
//   if (window._gitHash && sha && sha !== window._gitHash) {
//     useWebNotification({
//       title: '网页有更新',
//       body: message,
//     })
//   }
// }

if (!import.meta.env.SSR) {
  // setInterval(checkUpdate, 10 * 60 * 1000)
  import('./pwa')
}
