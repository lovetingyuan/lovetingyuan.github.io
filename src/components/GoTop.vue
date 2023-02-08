<template>
  <span class="go-top" title="返回顶部" @click="goTop">
    <UpIcon></UpIcon>
  </span>
</template>

<script setup lang="ts">
import UpIcon from '~icons/material-symbols/arrow-circle-up'
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
  display: block;
  padding: 12px;
  font-size: 28px;
  z-index: 9;
  cursor: pointer;
  opacity: 0.8;
}
.go-top:hover {
  color: blueviolet;
  opacity: 1;
}
</style>
