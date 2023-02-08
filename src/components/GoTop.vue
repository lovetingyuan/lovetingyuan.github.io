<template>
  <span class="go-top" title="返回顶部" @click="goTop">🚀</span>
</template>

<script setup lang="ts">
const goTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    // behavior: 'smooth',
  })
}
</script>

<style scoped>
.go-top {
  position: fixed;
  bottom: 20px;
  right: 10px;
  text-decoration: none;
  display: block;
  padding: 12px;
  font-size: 18px;
  transform: rotate(-45deg);
  z-index: 9;
  user-select: none;
  cursor: pointer;
}
</style>
