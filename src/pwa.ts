import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onOfflineReady() {
    alert('offline')
  },
  onNeedRefresh() {
    alert('refresh')
  },
  // immediate: true,
})
