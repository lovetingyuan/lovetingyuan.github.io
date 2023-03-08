<template>
  <div class="color-switch" @click="switchColor" title="切换亮/暗色">
    <icon-material-symbols-dark-mode v-if="colorMode === 'dark'" />
    <icon-material-symbols-light-mode v-else />
  </div>
</template>

<script setup lang="ts">
import { useColorMode, usePreferredColorScheme } from '@vueuse/core'
import { watch, watchEffect } from 'vue'
const colorMode = useColorMode()
const switchColor = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}

watchEffect(() => {
  if (colorMode.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

// 响应系统设置
const cp = usePreferredColorScheme()
watch(cp, () => {
  if (cp.value === 'no-preference') return
  colorMode.value = cp.value
})
</script>

<style scoped>
.color-switch {
  position: fixed;
  top: 10px;
  right: 16px;
  font-size: 0;
  cursor: pointer;
  opacity: 0.8;
}

.color-switch svg {
  font-size: 18px;
}
</style>
