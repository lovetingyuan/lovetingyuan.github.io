<template>
  <div
    class="fixed right-4 top-2 cursor-pointer text-xl opacity-80 hover:opacity-100"
    @click="switchColor"
    title="切换亮/暗色"
  >
    <iconify-icon icon="material-symbols:dark-mode" v-show="colorMode === 'dark'"></iconify-icon>
    <iconify-icon icon="material-symbols:light-mode" v-show="colorMode === 'light'"></iconify-icon>
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
