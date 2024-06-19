<template>
  <div>
    <div title="404" class="not-found mx-auto my-24 w-fit text-center text-[80px]">404</div>
    <p class="text-center">
      😅 当前页面(
      <code>
        <i>{{ path }}</i>
      </code>
      )找不到，请检查地址
      <br />
      <br />
      <RouterLink
        :to="{
          path: '/',
          replace: true
        }"
        class="text-lg"
        >🏠 返回首页</RouterLink
      >
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const path = ref('')
onMounted(() => {
  path.value = location.pathname
})
</script>

<style scoped>
.not-found {
  animation: glitch 1s linear infinite;
}

@keyframes glitch {
  2%,
  64% {
    transform: translate(2px, 0) skew(0deg);
  }

  4%,
  60% {
    transform: translate(-2px, 0) skew(0deg);
  }

  62% {
    transform: translate(0, 0) skew(5deg);
  }
}

.not-found:before,
.not-found:after {
  content: attr(title);
  position: absolute;
  left: 0;
}

.not-found:before {
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop {
  2%,
  64% {
    transform: translate(2px, -2px);
  }

  4%,
  60% {
    transform: translate(-2px, 2px);
  }

  62% {
    transform: translate(13px, -1px) skew(-13deg);
  }
}

.not-found:after {
  animation: glitchBottom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBottom {
  2%,
  64% {
    transform: translate(-2px, 0);
  }

  4%,
  60% {
    transform: translate(-2px, 0);
  }

  62% {
    transform: translate(-22px, 5px) skew(21deg);
  }
}
</style>
