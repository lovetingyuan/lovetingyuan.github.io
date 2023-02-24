<template>
  <div class="color-switch" @click="switchColor">
    <icon-material-symbols-light-mode v-if="colorMode === 'dark'" />
    <icon-material-symbols-dark-mode v-else />
  </div>
</template>

<script setup lang="ts">
import { useColorMode, usePreferredColorScheme } from '@vueuse/core'
import { watchEffect } from 'vue'
const colorMode = useColorMode()
const switchColor = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}

watchEffect(() => {
  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.classList.add(colorMode.value)
})
const cp = usePreferredColorScheme()
watchEffect(() => {
  colorMode.value = cp.value === 'dark' ? 'dark' : 'light'
})
</script>

<style scoped>
.color-switch {
  position: fixed;
  top: 10px;
  right: 15px;
  font-size: 0;
  cursor: pointer;
}

.color-switch svg {
  font-size: 18px;
}
</style>
