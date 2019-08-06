<template>
  <div>
    <ul>
      <li v-for="link in homeLinks" :key="link.url">
        <a :href="link.url" target="_blank">{{link.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
// import request from '../api'

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
