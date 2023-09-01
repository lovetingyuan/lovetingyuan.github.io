<template>
  <a
    :href="a.url"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="desc"
    class="flex flex-col justify-center gap-2 text-center"
  >
    <img
      :width="imageSize"
      loading="lazy"
      :height="imageSize"
      :src="getIcon(a.url)"
      alt="favicon"
      class="mx-auto my-0"
    />
    <span class="text-base">{{ a.title }}</span>
  </a>
</template>

<script lang="ts" setup>
// import { computed } from 'vue'
// import { useMediaQuery } from '@vueuse/core'

const props = defineProps<{
  a: {
    url: string
    title: string
    description?: string
  }
  size?: number
  capitalize?: boolean
}>()
const imageSize = props.size || 34
// const capitalizeCss = computed(() => {
//   return props.capitalize ?? true ? 'capitalize' : 'none'
// })
const getIcon = (url: string) => {
  const { host } = new URL(url)
  return `https://api.faviconkit.com/${host}/${imageSize}`
}
const desc = props.a.description || undefined
// const reduceAnimation = useMediaQuery('(prefers-reduced-motion: reduce)')
</script>
