<template>
  <div
    class="fixed right-4 top-2 w-6 h-6 text-center cursor-pointer text-xl opacity-80 hover:opacity-100"
    title="切换亮/暗色"
  >
    <label class="swap swap-rotate">
      <input v-model="checked" type="checkbox" />
      <IconifyIcon class="swap-on" icon="material-symbols:dark-mode"></IconifyIcon>
      <IconifyIcon class="swap-off" icon="material-symbols:light-mode"></IconifyIcon>
    </label>
  </div>
</template>

<script setup lang="ts">
import { useColorMode, usePreferredColorScheme } from '@vueuse/core'
import { computed, watch, watchEffect } from 'vue'

const colorMode = useColorMode()
const checked = computed<boolean>({
  set(v) {
    colorMode.value = v ? 'dark' : 'light'
  },
  get() {
    return colorMode.value === 'dark'
  }
})

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
