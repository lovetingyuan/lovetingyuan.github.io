<template>
  <RouterView />
  <UpdateButton v-if="needRefresh" @click="updateServiceWorker()" />
  <ColorSwitch />
  <GoTop />
  <div hidden>
    <!-- https://bg.ibelick.com/ -->
    <!-- <img src="/images/http2-stream-frame.png" alt="" /> -->
  </div>
  <!-- <img :key="catkey" :src="'https://cataas.com/cat?_t=' + Date.now()" alt="" width="100%" height="200" @click="catkey++"> -->
</template>

<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

// import { ref } from 'vue'
import ColorSwitch from './components/ColorSwitch.vue'
// const catkey = ref(0)
import GoTop from './components/GoTop.vue'
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
