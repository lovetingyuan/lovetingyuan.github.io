<template>
  <header class="flex items-center justify-between px-4 pt-6 md:px-6 lg:px-8">
    <h4 class="m-0 select-none text-xl">
      <RouterLink to="/">
        <span
          class="bg-gradient-to-r from-[#56B4D3] to-[#348F50] bg-clip-text leading-7 text-transparent"
          >庭院 Ⴆʅσɠ</span
        >
      </RouterLink>
    </h4>
    <nav class="ml-13 m-0 flex flex-wrap gap-x-2">
      <RouterLink
        :to="{ name: RouteName.BlogList }"
        class="btn btn-ghost btn-lg h-[2em] min-h-[2em] px-[1em] text-sky-700 hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-300"
      >
        博客
        <IconifyIcon icon="material-symbols:article" class="inline align-[-0.15em] text-xl" />
      </RouterLink>
      <RouterLink
        :to="{ name: RouteName.Music }"
        class="btn btn-ghost btn-lg h-[2em] min-h-[2em] px-[1em] text-lime-700 hover:text-lime-900 dark:text-lime-400 dark:hover:text-lime-300"
      >
        音乐
        <IconifyIcon icon="material-symbols:library-music" class="inline align-[-0.15em] text-xl" />
      </RouterLink>
      <RouterLink
        :to="{ name: RouteName.Movie }"
        class="btn btn-ghost btn-lg h-[2em] min-h-[2em] px-[1em] text-amber-700 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300"
      >
        电影
        <IconifyIcon icon="material-symbols:movie" class="inline align-[-0.15em] text-xl" />
      </RouterLink>
    </nav>
  </header>
  <main class="px-2 pb-20 pt-8 md:px-5 lg:px-8">
    <RouterView v-slot="{ Component, route }">
      <Transition
        v-if="!reduceAnimation"
        :name="(route.meta.animation as string) || 'fade'"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
      <component :is="Component" v-else />
    </RouterView>
  </main>
  <footer class="absolute bottom-0 left-0 h-8 w-full select-none text-center text-xs text-zinc-500">
    <span class="mr-2">{{ time }}</span>
    <span class="mr-2">𝘵𝘪𝘯𝘨𝘺𝘶𝘢𝘯</span>
    <span>❄️ </span>
    <i class="hover:underline" @click="openUrl('https://www.youtube.com/watch?v=ou6TnENM6IY')"
      >随着海风吹，吹向来时庭院~</i
    >
    <a
      class="ml-2"
      title="github"
      href="https://github.com/lovetingyuan/lovetingyuan.github.io"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconifyIcon
        noobserver
        icon="mdi:github"
        class="inline align-text-bottom text-base"
      ></IconifyIcon>
    </a>
  </footer>
</template>

<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core'
import { onMounted, ref } from 'vue'

import { RouteName } from '../constants'

const time = ref('')
onMounted(() => {
  // 避免水合不一致
  // @ts-expect-error _buildTime is injected in building.
  time.value = window._buildTime || new Date().toLocaleDateString()
})
const reduceAnimation = useMediaQuery('(prefers-reduced-motion: reduce)')

const openUrl = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>
