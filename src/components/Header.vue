<template>
  <header>
    <nav>
      <ul>
        <router-link tag="li" v-for="nav in navsList" :key="nav.title + nav.path" :to="nav.path">{{nav.title}}</router-link>
        <li><a href="https://github.com/lovetingyuan/lovetingyuan.github.io" target="_blank" rel="noopener">Github</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    navsList: Array
  },
  mounted () {
    console.log(this.navsList)
  }
}
</script>

<style lang="less" scoped>
header {
  // background-color: antiquewhite;
  box-shadow: 0 0 10px 5px #f2f2f2;
  padding: 28px;
  position: fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, .9);
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
