<template>
  <div
    class="fixed bottom-[70px] right-3 cursor-pointer text-3xl hover:text-lime-600"
    @click="update"
  >
    <icon-material-symbols-refresh class="animate-spin" />
  </div>
</template>

<script setup lang="ts">
import { hasUpdate } from '@/global'

const update = () => {
  if (typeof hasUpdate.value === 'function') {
    hasUpdate.value?.()
  }
  hasUpdate.value = false
}
</script>
