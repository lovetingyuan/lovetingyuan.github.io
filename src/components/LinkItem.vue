<template>
  <img width="20" style="vertical-align: middle; margin-right: 12px" :src="getIcon(a.url)" alt="favicon" />
  <a :href="a.url" target="_blank" rel="noopener noreferrer">{{ a.title }}</a>
</template>

<script lang="ts" setup>
defineProps<{
  a: {
    url: string
    title: string
  }
}>()
const getIcon = (url: string) => {
  const { host } = new URL(url)
  return `https://api.faviconkit.com/${host}/32`
}
</script>
