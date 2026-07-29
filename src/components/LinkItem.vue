<template>
  <a
    :href="a.url"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="desc || a.title"
    class="link-item btn btn-ghost flex h-18 flex-col items-center justify-center gap-2 px-4 py-2 text-center"
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
      alt=""
      class="mx-auto my-0"
      loading="lazy"
    />
    <span v-if="a.title" class="text-sm font-normal">{{ a.title }}</span>
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
const desc = props.a.description || undefined

const getIcon = (url: string) => {
  if (props.a.icon && props.a.icon.startsWith('http')) {
    return props.a.icon
  }
  const { host } = new URL(url)
  return `https://favicone.com/${host}?s=${imageSize}`
}
</script>
