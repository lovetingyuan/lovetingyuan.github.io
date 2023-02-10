<template>
  <div>
    <div title="404" class="not-found">404</div>
    <p style="text-align: center">
      😅 当前页面(<code>{{ path }}</code
      >)找不到，请检查地址或刷新重试
    </p>
  </div>
</template>

<script setup lang="ts">
const path = location.pathname
</script>

<style scoped>
.not-found {
  width: fit-content;
  margin: 100px auto;
  font-size: 50px;
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

div:before {
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
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
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom {
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
