<template>
  <div
    class="fixed bottom-[70px] right-3 cursor-pointer text-3xl hover:text-lime-600"
    @click="updateServiceWorker()"
    v-show="needRefresh"
  >
    <icon-material-symbols-refresh class="animate-spin" />
  </div>
</template>

<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: false
})
</script>
