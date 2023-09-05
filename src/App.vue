<template>
  <router-view />
  <UpdateButton />
  <ColorSwitch />
</template>

<script setup lang="ts">
import UpdateButton from './components/UpdateButton.vue'
// import { hasUpdate } from './global'
import ColorSwitch from './components/ColorSwitch.vue'
</script>
