<template>
  <a
    :href="a.url"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="desc"
    class="btn btn-ghost flex flex-col items-center justify-center gap-2 text-center"
  >
    <IconifyIcon
      v-if="props.a.icon && !props.a.icon.startsWith('http')"
      :icon="props.a.icon"
      class="text-2xl"
    />
    <img
      v-else
      :width="imageSize"
      :height="imageSize"
      :src="getIcon(a.url)"
      alt="favicon"
      class="mx-auto my-0"
    />
    <span v-if="a.title" class="text-base font-normal">{{ a.title }}</span>
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
  // return `https://www.google.com/s2/favicons?domain=${host}&sz=${imageSize}`
  return `https://favicone.com/${host}?s=${imageSize}`
  // return `https://favicon.im/${host}?larger=true`
  // return `https://api.faviconkit.com/${host}/${imageSize}`
}
const desc = props.a.description || undefined
// const reduceAnimation = useMediaQuery('(prefers-reduced-motion: reduce)')
</script>
