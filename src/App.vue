<template>
  <header>
    <h4 class="title">
      <router-link to="/" style="color: #555">庭院 Ⴆʅσɠ</router-link>
    </h4>
    <ul class="links">
      <li>
        <router-link to="/blog" style="color: #007896">博客 📟</router-link>
      </li>
      <li>
        <router-link to="/music" style="color: #007419">音乐 🎵</router-link>
      </li>
      <li>
        <router-link to="/movie" style="color: #7b00ac">电影 🎬</router-link>
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
</template>

<script lang="ts" setup>
import github from './assets/github.svg?raw'
const time = (window as any)._buildTime || new Date().toLocaleDateString()
</script>

<style scoped>
header {
  display: flex;
}
.title {
  margin: 0;
  font-size: 22px;
  filter: blur(0.4px);
  user-select: none;
}

.links {
  list-style: none;
  font-size: 20px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  margin-left: 50px;
  user-select: none;
}
.links li {
  float: left;
  margin: 0 15px 10px 15px;
}
@media screen and (max-width: 500px) {
  .links {
    font-size: 18px;
  }
  .title {
    font-size: 20px;
  }
  .links {
    margin-left: 10px;
  }
  .links li {
    margin: 0 10px 10px 10px;
  }
}

main {
  margin-top: 40px;
  position: relative;
}
footer {
  position: absolute;
  bottom: 0;
  height: 38px;
  line-height: 38px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  user-select: none;
  color: #999;
  left: 0;
}
.github-link {
  vertical-align: sub;
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-left: 12px;
}
</style>
