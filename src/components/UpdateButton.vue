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
  right: 12px;
  display: block;
  padding: 3px 6px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0;
}

.button svg {
  font-size: 28px;
  animation-name: rotate;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

.button:hover {
  color: green;
}

@keyframes rotate {
  75% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
