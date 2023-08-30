<template>
  <div
    class="go-top fixed bottom-5 right-3 z-9 cursor-pointer opacity-80 hover:opacity-100"
    title="返回顶部"
    @click="goTop"
  >
    <icon-material-symbols-arrow-circle-up class="text-3xl hover:text-cyan-600" />
  </div>
</template>

<script setup lang="ts">
const goTop = () => {
  document.documentElement.scrollTo({
    top: 0
    // behavior: 'smooth',
  })
}
</script>
