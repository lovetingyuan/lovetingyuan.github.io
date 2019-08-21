<template>
  <header>
    <nav>
      <ul class="nav-list">
        <li v-for="nav in navsList" :key="nav.title + nav.path">
          <router-link :to="nav.path || nav.to" :exact="!!nav.exact" class="a-link" v-html="nav.title">
          </router-link>
        </li>
        <li>
          <a href="https://github.com/lovetingyuan/lovetingyuan.github.io" target="_blank" rel="noopener noreferrer" title="github">
            <svg width="20" height="20"><use xlink:href="#github"/></svg>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    navsList: Array
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
  z-index: 9;
  user-select: none;
  nav {
    max-width: var(--max-width);
    margin: 0 auto;
    .a-link {
      text-decoration: none;
      color: var(--font-color);
    }
  }
  .nav-list {
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
        color: var(--theme-color);
      }
    }
    ::v-deep svg {
      vertical-align: top;
    }
  }
}
</style>
