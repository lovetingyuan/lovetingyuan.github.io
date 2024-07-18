<template>
  <button
    class="btn btn-square btn-ghost btn-xs fixed right-2 top-2 cursor-pointer text-center text-xl opacity-80 hover:opacity-100"
    title="切换亮/暗色"
  >
    <label class="swap swap-rotate">
      <input v-model="checked" type="checkbox" />
      <IconifyIcon class="swap-on" icon="material-symbols:dark-mode"></IconifyIcon>
      <IconifyIcon class="swap-off" icon="material-symbols:light-mode"></IconifyIcon>
    </label>
  </button>
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
    document.documentElement.dataset.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.dataset.theme = 'light'
  }
})

// 响应系统设置
const cp = usePreferredColorScheme()
watch(cp, () => {
  if (cp.value === 'no-preference') return
  colorMode.value = cp.value
})
</script>
