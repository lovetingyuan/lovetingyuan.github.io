<template>
  <div
    class="go-top z-9 fixed bottom-5 right-4 cursor-pointer opacity-80 hover:opacity-100"
    title="返回顶部"
    @click="goTop"
  >
    <iconify-icon
      icon="material-symbols:arrow-circle-up"
      class="text-4xl hover:text-cyan-600"
    ></iconify-icon>
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
