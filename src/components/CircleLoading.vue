<template>
  <div style="text-align: center" v-show="show">
    <div class="circle"></div>
    <span class="text">❄️ 加载中<span class="dot">...</span></span>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue'

const props = defineProps<{
  defer?: number
}>()
const show = ref(props.defer ? false : true)

const timer = setTimeout(() => {
  show.value = true
}, props.defer ?? 0)

onUnmounted(() => {
  clearTimeout(timer)
})
</script>

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

/** https://www.zhangxinxu.com/wordpress/2016/11/css-content-pre-animation-character-loading/ */
.dot {
  display: inline-block;
  height: 1em;
  line-height: 1;
  text-align: left;
  vertical-align: -0.25em;
  overflow: hidden;
  font-weight: bold;
  letter-spacing: 2px;
}

.dot::before {
  display: block;
  content: '...\A..\A.';
  white-space: pre-wrap;
  /* 也可以是white-space: pre */
  animation: dot 1s infinite step-start both;
}

@keyframes dot {
  33% {
    transform: translateY(-2em);
  }

  66% {
    transform: translateY(-1em);
  }
}
</style>
