<template>
  <span class="go-top" title="返回顶部" @click="goTop">
    <icon-material-symbols-arrow-circle-up />
  </span>
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
  bottom: 24px;
  right: 15px;
  display: block;
  font-size: 0;
  z-index: 9;
  cursor: pointer;
  opacity: 0.8;
}
.go-top svg {
  font-size: 28px;
}
.go-top:hover {
  color: blueviolet;
  opacity: 1;
}
</style>
