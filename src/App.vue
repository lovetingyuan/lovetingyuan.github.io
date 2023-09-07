<template>
  <router-view />
  <UpdateButton @click="updateServiceWorker()" v-if="needRefresh" />
  <ColorSwitch />
</template>

<script setup lang="ts">
import UpdateButton from './components/UpdateButton.vue'
import ColorSwitch from './components/ColorSwitch.vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: false
})
</script>
