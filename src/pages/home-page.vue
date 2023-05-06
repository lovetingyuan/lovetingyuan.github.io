<template>
  <header>
    <h4 class="title">
      <router-link to="/">庭院 Ⴆʅσɠ</router-link>
    </h4>
    <ul class="links">
      <li>
        <router-link :to="{ name: RouteName.BlogList }" style="color: var(--blog-header-color)">
          博客
          <icon-material-symbols-article />
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: RouteName.Music }" style="color: var(--music-header-color)">
          音乐
          <icon-material-symbols-library-music />
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: RouteName.Movie }" style="color: var(--movie-header-color)">
          电影
          <icon-material-symbols-movie />
        </router-link>
      </li>
    </ul>
  </header>
  <main>
    <router-view v-slot="{ Component, route }">
      <transition v-if="!reduceAnimation" :name="(route.meta.animation as string) || 'fade'" mode="out-in">
        <component :is="Component" />
      </transition>
      <component v-else :is="Component" />
    </router-view>
  </main>
  <footer>
    <i>{{ time }}</i>
    <span style="margin-left: 8px">𝘵𝘪𝘯𝘨𝘺𝘶𝘢𝘯</span>
    <i> ❄️ 随着海风吹，吹向来时庭院~ </i>
    <a class="github-link" title="github" href="https://github.com/lovetingyuan/lovetingyuan.github.io" target="_blank"
      rel="noopener noreferrer">
      <icon-mdi-github />
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
header {
  display: flex;
  align-items: center;
  padding: 0 15px;
  padding-top: 25px;
}

header a {
  text-decoration: none;
}

.title {
  margin: 0;
  font-size: 20px;
  user-select: none;
}

.title a {
  color: var(--text-color);
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.links {
  list-style: none;
  font-size: 18px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  margin-left: 50px;
  user-select: none;
}

.links li {
  float: left;
  margin: 10px 20px;
}

main {
  margin-top: 35px;
  position: relative;
  padding: 0 20px;
  padding-bottom: 100px;
}

footer {
  position: absolute;
  bottom: 0;
  height: 24px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  user-select: none;
  color: var(--text-color);
  opacity: 0.8;
  left: 0;
}

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

.github-link {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-left: 8px;
}

svg {
  vertical-align: text-top;
}
</style>
