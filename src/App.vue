<template>
  <RouterView />
  <UpdateButton v-if="needRefresh" @click="updateServiceWorker()" />
  <ColorSwitch />
  <div hidden>
    <!-- https://bg.ibelick.com/ -->
     <!-- <img src="/images/http2-stream-frame.png" alt="" /> -->
  </div>
</template>

<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

import ColorSwitch from './components/ColorSwitch.vue'
import UpdateButton from './components/UpdateButton.vue'

const { needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: false,
  onRegisteredSW(u, r) {
    r &&
      setInterval(
        () => {
          r.update()
        },
        60 * 60 * 1000
      )
  }
})
</script>
