<template>
  <header>
    <div>this is header</div>
    <nav>
      <ul>
        <router-link tag="li" to="/home">Home</router-link>
        <router-link tag="li" to="/about">About</router-link>
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
