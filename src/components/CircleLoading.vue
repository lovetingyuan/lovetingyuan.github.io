<template>
  <div v-show="show" class="text-center">
    <span class="loading loading-spinner loading-lg scale-150"></span>
    <p class="mt-6 text-lg leading-8">❄️ 加载中...</p>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue'

const properties = defineProps<{
  /**
   * 延迟显示的时间 ms
   */
  defer?: number
}>()
const show = ref(properties.defer ? false : true)

const timer = setTimeout(() => {
  show.value = true
}, properties.defer ?? 0)

onUnmounted(() => {
  clearTimeout(timer)
})
</script>
