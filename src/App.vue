<template>
  <router-view />
  <UpdateButton @click="updateServiceWorker()" v-if="needRefresh" />
  <ColorSwitch />
</template>

<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

import ColorSwitch from './components/ColorSwitch.vue'
import UpdateButton from './components/UpdateButton.vue'

const { needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: false
})
</script>
