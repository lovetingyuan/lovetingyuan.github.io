<script setup lang="ts">
</script>

<template>

<header>
  <h4 class="title">
    <router-link to="/">庭院 Ⴆʅσɠ</router-link>
  </h4>
  <ul class="links">
    <li>
      <router-link to="/blog">博客 📟</router-link>
    </li>
    <li>
      <router-link to="/music">音乐 🎵</router-link>
    </li>
    <li>
      <router-link to="/movie">电影 🎬</router-link>
    </li>
  </ul>
</header>
<main>
  <router-view></router-view>
</main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  padding: 20px 40px;
  --theme-color: rgb(0, 157, 230);
  --theme-color2: rgb(0, 120, 175);
  --text-color: #2c3e50;
}
.router-link-active {
  font-weight: bold;
}
a {
  text-decoration: none;
  color: var(--theme-color);
}
a:hover {
  color: var(--theme-color2);
}
</style>

<style scoped>
header {
  display: flex;
}
.title {
  margin: 0;
  user-select: none;
}
.title a {
  color: var(--text-color);

}
.links {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  margin-left: 50px;
}
.links li {
  float: left;
  margin: 0 15px;
}
main {
  margin-top: 50px;
  position: relative;
  padding: 0 20px;
}
</style>
