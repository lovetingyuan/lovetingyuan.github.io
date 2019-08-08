<template>
  <div>
    <h2>一些有用的链接</h2>
    <ul class="links">
      <li v-for="link in homeLinks" :key="link.url">
        <a :href="link.url" target="_blank">{{link.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData (store) {
    return store.$fetchLinks('/data/home.json')
  },
  computed: {
    homeLinks () {
      return this.$store.links
    }
  }
}
</script>

<style lang="less" scoped>
.links {
  li {
    margin: 20px;
  }
  li a {
    text-transform: capitalize;
    text-decoration: none;
  }
}
</style>
