<template>
  <router-view />
  <UpdateButton @click="updateServiceWorker()" v-if="needRefresh" />
  <ColorSwitch />
  <div>
    <!-- https://bg.ibelick.com/ -->
  </div>
</template>

<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

import ColorSwitch from './components/color-switch.vue'
import UpdateButton from './components/update-button.vue'

const { needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: false,
  onRegisteredSW(u, r) {
    r &&
      setInterval(
        () => {
          r.update()
        },
        4 * 60 * 60 * 1000
      )
  }
})
</script>
