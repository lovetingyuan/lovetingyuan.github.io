<template>
  <div class="button" @click="update">
    <icon-material-symbols-refresh />
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

<style scoped>
.button {
  position: fixed;
  bottom: 70px;
  right: 16px;
  display: block;
  padding: 3px 6px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 28px;
}

.button:hover {
  color: green;
}
</style>
