<template>
  <button
    type="button"
    class="go-top"
    :class="{ 'is-hidden': !isVisible }"
    title="返回顶部"
    aria-label="返回顶部"
    :tabindex="isVisible ? 0 : -1"
    @click="goTop"
  >
    <IconifyIcon icon="solar:arrow-up-linear" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
import { useMediaQuery, useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

const { y } = useWindowScroll()
const reduceAnimation = useMediaQuery('(prefers-reduced-motion: reduce)')
const isVisible = computed(() => y.value > 520)

const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: reduceAnimation.value ? 'auto' : 'smooth'
  })
}
</script>
