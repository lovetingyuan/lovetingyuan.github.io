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
</template>

<style scoped>
header {
  display: flex;
  font-size: 18px;
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
  user-select: none;
}
.links li {
  float: left;
  margin: 0 15px  10px 15px;
}
@media screen and (max-width: 500px) {
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
</style>
