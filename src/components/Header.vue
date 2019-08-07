<template>
  <header>
    <nav>
      <ul>
        <router-link tag="li" to="/">Home</router-link>
        <router-link tag="li" to="/blog">Blog</router-link>
        <router-link tag="li" to="/music">Music</router-link>
        <router-link tag="li" to="/movie">Movie</router-link>
        <router-link tag="li" to="/story">Story</router-link>
        <li><a href="https://github.com/lovetingyuan/lovetingyuan.github.io" target="_blank" rel="noopener">github</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="less" scoped>
header {
  // background-color: antiquewhite;
  box-shadow: 0 0 10px 5px #f2f2f2;
  padding: 28px;
  nav {
    max-width: var(--max-width);
    margin: 0 auto;
  }
  ul {
    list-style: none;
    overflow: hidden;
    margin: 0;
    padding: 0;
    li {
      float: left;
      margin-right: 28px;
      cursor: pointer;
      transition: color .2s;
      &:hover {
        color: yellowgreen;
      }
    }
  }
}
</style>
