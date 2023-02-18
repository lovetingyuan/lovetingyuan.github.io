import { registerSW } from 'virtual:pwa-register'
// import { useWebNotification } from '@vueuse/core'
import { hasUpdate } from './global'

const updateSW = registerSW({
  onOfflineReady() {
    // alert('offline')
    console.log('sw offline enabled...')
  },
  onNeedRefresh() {
    hasUpdate.value = updateSW
    console.log('sw update')
  },
  // immediate: true,
})

export default updateSW
