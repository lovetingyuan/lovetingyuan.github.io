<template>
  <a :href="a.url" target="_blank" rel="noopener noreferrer">
    <img :width="imageSize" :height="imageSize" :src="getIcon(a.url)" alt="favicon" />
    <span>{{ a.title }}</span>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  a: {
    url: string
    title: string
  }
  size?: number
}>()
const getIcon = (url: string) => {
  const { host } = new URL(url)
  return `https://api.faviconkit.com/${host}/32`
}
const imageSize = props.size || 40
</script>
