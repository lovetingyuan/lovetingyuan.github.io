<template>
  <a
    :href="a.url"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="desc"
    class="flex flex-col justify-center gap-2 text-center"
  >
    <IconifyIcon
      v-if="props.a.icon && !props.a.icon.startsWith('http')"
      :icon="props.a.icon"
      class="text-2xl"
    ></IconifyIcon>
    <img
      v-else
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
const props = defineProps<{
  a: {
    url: string
    title: string
    icon?: string
    description?: string
  }
  size?: number
  capitalize?: boolean
}>()
const imageSize = props.size || 32
const getIcon = (url: string) => {
  if (props.a.icon && props.a.icon.startsWith('http')) {
    return props.a.icon
  }
  const { host } = new URL(url)
  return `https://favicone.com/${host}?s=${imageSize}`
  // return `https://api.faviconkit.com/${host}/${imageSize}`
}
const desc = props.a.description || undefined
// const reduceAnimation = useMediaQuery('(prefers-reduced-motion: reduce)')
</script>
