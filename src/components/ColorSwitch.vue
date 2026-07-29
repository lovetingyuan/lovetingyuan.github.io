<template>
  <button
    type="button"
    class="theme-switch"
    :title="checked ? '切换到浅色模式' : '切换到深色模式'"
    :aria-label="checked ? '切换到浅色模式' : '切换到深色模式'"
    :aria-pressed="checked"
    @click="checked = !checked"
  >
    <IconifyIcon
      :icon="checked ? 'solar:sun-2-outline' : 'solar:moon-stars-outline'"
      aria-hidden="true"
    />
  </button>
</template>

<script setup lang="ts">
import { useColorMode, usePreferredColorScheme } from '@vueuse/core'
import { computed, watch, watchEffect } from 'vue'

const colorMode = useColorMode()
const checked = computed<boolean>({
  set(value) {
    colorMode.value = value ? 'dark' : 'light'
  },
  get() {
    return colorMode.value === 'dark'
  }
})

watchEffect(() => {
  const isDark = colorMode.value === 'dark'
  document.documentElement.classList.toggle('dark', isDark)
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
})

const preferredScheme = usePreferredColorScheme()
watch(preferredScheme, () => {
  if (preferredScheme.value === 'no-preference') return
  colorMode.value = preferredScheme.value
})
</script>
