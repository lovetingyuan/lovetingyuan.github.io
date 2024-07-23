<template>
  <header class="px-2 py-2 sm:px-6">
    <nav class="navbar bg-base-100 bg-transparent">
      <div class="flex-1">
        <RouterLink to="/">
          <span
            class="bg-gradient-to-r from-[#56B4D3] to-[#348F50] bg-clip-text text-xl leading-7 text-transparent"
            >庭院 Ⴆʅσɠ</span
          >
        </RouterLink>
      </div>
      <ul class="menu menu-horizontal gap-x-2">
        <li>
          <RouterLink
            active-class="btn-active"
            :to="{ name: RouteName.BlogList }"
            class="btn btn-ghost btn-lg h-[2em] min-h-[2em] px-[0.8em] text-sky-700 hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-300"
          >
            博客
            <IconifyIcon icon="material-symbols:article" class="inline align-[-0.15em] text-xl" />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            active-class="btn-active"
            :to="{ name: RouteName.Music }"
            class="btn btn-ghost btn-lg h-[2em] min-h-[2em] px-[0.8em] text-lime-700 hover:text-lime-900 dark:text-lime-400 dark:hover:text-lime-300"
          >
            音乐
            <IconifyIcon
              icon="material-symbols:library-music"
              class="inline align-[-0.15em] text-xl"
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            active-class="btn-active"
            :to="{ name: RouteName.Movie }"
            class="btn btn-ghost btn-lg h-[2em] min-h-[2em] px-[0.8em] text-amber-700 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300"
          >
            电影
            <IconifyIcon icon="material-symbols:movie" class="inline align-[-0.15em] text-xl" />
          </RouterLink>
        </li>
      </ul>
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
  <footer class="footer footer-center absolute bottom-0 py-2 text-base-content">
    <aside class="flex select-none text-xs">
      <span class="mr-1">{{ time }}</span>
      <span class="mr-1">𝘵𝘪𝘯𝘨𝘺𝘶𝘢𝘯</span>
      <span>❄️</span>
      <i class="hover:underline" @click="openUrl('https://www.youtube.com/watch?v=ou6TnENM6IY')"
        >随着海风吹，吹向来时庭院~</i
      >
      <a
        class="ml-1"
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
    </aside>
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
