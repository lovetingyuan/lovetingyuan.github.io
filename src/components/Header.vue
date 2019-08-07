<template>
  <header>
    <nav>
      <ul>
        <router-link tag="li" to="/">Home</router-link>
        <router-link tag="li" to="/about">About</router-link>
        <li><a href="https://github.com/lovetingyuan/lovetingyuan.github.io" target="_blank" rel="noopener">github</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="less" scoped>
header {
  background-color: antiquewhite;
  padding: 10px;
  ul {
    list-style: none;
    overflow: hidden;
    li {
      float: left;
      margin: 10px;
      cursor: pointer;
      transition: color .2s;
      &:hover {
        color: yellowgreen;
      }
    }
  }
}
</style>
