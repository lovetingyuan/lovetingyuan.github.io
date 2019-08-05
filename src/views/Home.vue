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
export default {
  data() {
    return {
      homeLinks: []
    }
  },
  created() {
    fetch('/data/home.json').then(res => res.json()).then(data => {
      this.homeLinks = data.links
    })
  }
}
</script>
