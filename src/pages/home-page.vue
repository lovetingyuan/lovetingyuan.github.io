<template>
  <header class="flex items-center justify-between px-8 pt-6">
    <h4 class="m-0 select-none text-xl">
      <router-link to="/">庭院 Ⴆʅσɠ</router-link>
    </h4>
    <ul class="ml-13 m-0 select-none list-none overflow-hidden p-0 text-lg">
      <li class="float-left mx-2 my-2 sm:mx-5">
        <router-link :to="{ name: RouteName.BlogList }" class="text-sky-700 hover:text-sky-900">
          博客
          <icon-material-symbols-article class="align-sub" />
        </router-link>
      </li>
      <li class="float-left mx-2 my-2 sm:mx-5">
        <router-link :to="{ name: RouteName.Music }" class="text-lime-700 hover:text-lime-900">
          音乐
          <icon-material-symbols-library-music class="align-sub" />
        </router-link>
      </li>
      <li class="float-left mx-2 my-2 sm:mx-5">
        <router-link :to="{ name: RouteName.Movie }" class="text-amber-700 hover:text-amber-900">
          电影
          <icon-material-symbols-movie class="align-sub" />
        </router-link>
      </li>
    </ul>
  </header>
  <main class="px-8 pb-8 pt-5">
    <router-view v-slot="{ Component, route }">
      <transition
        v-if="!reduceAnimation"
        :name="(route.meta.animation as string) || 'fade'"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
      <component v-else :is="Component" />
    </router-view>
  </main>
  <footer class="absolute bottom-0 left-0 h-6 w-full select-none text-center text-xs text-zinc-500">
    <i>{{ time }}</i>
    <span class="mr-2">𝘵𝘪𝘯𝘨𝘺𝘶𝘢𝘯</span>
    <i> ❄️ 随着海风吹，吹向来时庭院~ </i>
    <a
      class="ml-2 text-sm"
      title="github"
      href="https://github.com/lovetingyuan/lovetingyuan.github.io"
      target="_blank"
      rel="noopener noreferrer"
    >
      <icon-mdi-github class="align-text-top" />
    </a>
  </footer>
  <GoTop />
</template>

<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core'
import GoTop from '../components/GoTop.vue'

import { RouteName } from '../constants'
import { ref, onMounted } from 'vue'

const time = ref('')
onMounted(() => {
  // 避免水合不一致
  time.value = window._buildTime || new Date().toLocaleDateString()
})
const reduceAnimation = useMediaQuery('(prefers-reduced-motion: reduce)')
</script>

<style scoped>
@media screen and (max-width: 500px) {
  .links {
    margin-left: 20px;
  }

  .links li {
    margin: 10px;
  }

  header {
    justify-content: space-between;
  }

  main {
    padding-left: 15px;
    padding-right: 15px;
  }
}

@media screen and (max-width: 400px) {
  .links {
    margin-left: 10px;
  }

  .title {
    font-size: 18px;
  }

  .links {
    font-size: 16px;
  }

  .links li {
    margin: 5px;
  }
}
</style>
