<template>
  <div v-show="show" class="text-center">
    <div
      class="border-3 mx-auto my-0 box-border h-20 w-20 animate-spin rounded-full border-8 border-teal-200 border-t-teal-600"
    ></div>
    <p class="mt-6 text-lg leading-8">❄️ 加载中...</p>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue'

const properties = defineProps<{
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
