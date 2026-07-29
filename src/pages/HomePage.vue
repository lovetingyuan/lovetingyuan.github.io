<template>
  <header class="site-header px-2 py-2 sm:px-6" :class="onlyContent ? 'hidden' : ''">
    <nav class="navbar shell-nav">
      <div class="flex-1">
        <RouterLink to="/" class="brand-link"> 庭院 Ⴆʅσɠ </RouterLink>
      </div>
      <menu class="menu menu-horizontal nav-menu gap-x-1">
        <li>
          <RouterLink
            active-class="btn-active"
            :to="{ name: RouteName.BlogAllList }"
            class="btn btn-ghost nav-button"
          >
            博客
            <IconifyIcon icon="material-symbols:article-outline" aria-hidden="true" />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            active-class="btn-active"
            :to="{ name: RouteName.Music }"
            class="btn btn-ghost nav-button"
          >
            音乐
            <IconifyIcon icon="material-symbols:library-music-outline" aria-hidden="true" />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            active-class="btn-active"
            :to="{ name: RouteName.Movie }"
            class="btn btn-ghost nav-button"
          >
            电影
            <IconifyIcon icon="material-symbols:movie-outline" aria-hidden="true" />
          </RouterLink>
        </li>
      </menu>
    </nav>
  </header>

  <main class="page-shell px-2 pt-4 pb-20 md:px-5 lg:px-8">
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

  <footer
    class="site-footer footer footer-center text-base-content absolute bottom-0 py-2"
    :class="onlyContent ? 'hidden' : ''"
  >
    <aside class="flex text-xs select-none">
      <span class="mr-1">{{ time }}</span>
      <span class="mr-1">𝘵𝘪𝘯𝘨𝘺𝘶𝘢𝘯</span>
      <i
        class="footer-song hover:underline"
        @click="openUrl('https://www.youtube.com/watch?v=ou6TnENM6IY')"
        >随着海风吹，吹向来时庭院~</i
      >
      <a
        class="ml-1"
        title="GitHub"
        aria-label="GitHub"
        href="https://github.com/lovetingyuan/lovetingyuan.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconifyIcon icon="mdi:github" class="inline align-text-bottom text-base" />
      </a>
    </aside>
  </footer>
</template>

<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core'
import { onMounted, ref } from 'vue'

import { RouteName } from '../constants'

const time = ref('')
const onlyContent = ref(false)
const reduceAnimation = useMediaQuery('(prefers-reduced-motion: reduce)')

onMounted(() => {
  // @ts-expect-error _buildTime is injected while building.
  time.value = window._buildTime || new Date().toLocaleDateString()
  onlyContent.value = location.search.includes('onlycontent=true')
})

const openUrl = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>
