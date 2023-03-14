<template>
  <div style="text-align: center">
    <div class="circle"></div>
    <span class="text">❄️ 加载中<span class="dot">...</span></span>
  </div>
</template>

<style scoped>
.circle {
  box-sizing: border-box;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  border: 10px solid rgb(0 59 242 / 17%);
  border-top-color: #2291cf;
  animation: spin 1s infinite linear;
}
.text {
  line-height: 4;
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
