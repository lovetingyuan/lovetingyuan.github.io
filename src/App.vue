<template>
<header>
  <h4 class="title">
    <router-link to="/" style="color: #555">庭院 Ⴆʅσɠ</router-link>
  </h4>
  <ul class="links">
    <li>
      <router-link to="/blog" style="color: #0092b7">博客 📟</router-link>
    </li>
    <li>
      <router-link to="/music" style="color: #00911f">音乐 🎵</router-link>
    </li>
    <li>
      <router-link to="/movie" style="color: #7b00ac">电影 🎬</router-link>
    </li>
  </ul>
</header>
<main>
  <router-view></router-view>
</main>
</template>

<style scoped>
header {
  display: flex;
  font-size: 1.15em;
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
