<template>
  <header>
    <h4 class="title">
      <router-link to="/" style="color: #555">庭院 Ⴆʅσɠ</router-link>
    </h4>
    <ul class="links">
      <li>
        <router-link to="/blog" style="color: #007896" data-icon="📟">博客</router-link>
      </li>
      <li>
        <router-link to="/music" style="color: #007419" data-icon="🎵">音乐</router-link>
      </li>
      <li>
        <router-link to="/movie" style="color: #7b00ac" data-icon="🎬">电影</router-link>
      </li>
    </ul>
  </header>
  <main>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.animation || 'fade'" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <footer>
    <i>{{ time }}</i>
    <span style="margin-left: 8px">𝘵𝘪𝘯𝘨𝘺𝘶𝘢𝘯</span>
    <i> ❄️ 随着海风吹，吹向来时庭院~ </i>
    <a
      class="github-link"
      title="github"
      v-html="github"
      href="https://github.com/lovetingyuan/lovetingyuan.github.io"
      target="_blank"
      rel="noopener noreferrer"
    >
    </a>
  </footer>
  <go-top />
</template>

<script lang="ts" setup>
import github from './assets/github.svg?raw'
import GoTop from './components/GoTop.vue'
const time = Object(window)._buildTime || new Date().toLocaleDateString()
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  padding: 0 10px;
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
  margin-top: 40px;
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
  color: #999;
  left: 0;
}
@media screen and (max-width: 600px) {
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
    padding-left: 10px;
    padding-right: 10px;
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
  vertical-align: sub;
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-left: 12px;
}
[data-icon]:after {
  content: attr(data-icon);
  margin-left: 5px;
  font-size: 0.8em;
}
</style>
