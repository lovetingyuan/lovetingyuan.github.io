<template>
  <a :href="a.url" target="_blank" rel="noopener noreferrer" class="link">
    <span :aria-label="desc" data-balloon-pos="up" :data-balloon-blunt="reduceAnimation || undefined">
      <img
        :width="imageSize"
        loading="lazy"
        :height="imageSize"
        :src="getIcon(a.url)"
        alt="favicon"
        class="site-icon"
      />
      <span class="site-name">{{ a.title }}</span>
    </span>
  </a>
</template>

<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core'

const props = defineProps<{
  a: {
    url: string
    title: string
    description?: string
  }
  size?: number
}>()
const getIcon = (url: string) => {
  const { host } = new URL(url)
  return `https://api.faviconkit.com/${host}/32`
}
const imageSize = props.size || 40
const desc = props.a.description || undefined
const reduceAnimation = useMediaQuery('(prefers-reduced-motion: reduce)')
</script>

<style scoped>
.link {
  display: inline-block;
  /* margin: 10px 20px; */
}

.site-icon {
  vertical-align: middle;
  margin-right: 10px;
}

.site-name {
  vertical-align: middle;
  text-transform: capitalize;
}
</style>
