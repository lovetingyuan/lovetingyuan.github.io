import { registerSW } from 'virtual:pwa-register'
import { useWebNotification } from '@vueuse/core'

const updateSW = registerSW({
  onOfflineReady() {
    // alert('offline')
    console.log('offline enabled...')
  },
  onNeedRefresh() {
    useWebNotification({
      title: '站点有更新',
      body: '点击右下角更新',
    })
    console.log('update')
  },
  // immediate: true,
})

export default updateSW
