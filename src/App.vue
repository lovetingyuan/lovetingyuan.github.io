<template>
  <router-view />
  <UpdateButton @click="updateServiceWorker()" v-if="needRefresh" />
  <ColorSwitch />
</template>

<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

import ColorSwitch from './components/color-switch.vue'
import UpdateButton from './components/update-button.vue'

const { needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: false
})
</script>
