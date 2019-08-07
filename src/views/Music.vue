<template>
  <div>
    this is music
    <ul>
      <li v-for="song in bestSongs" :key="song.name">
        <img :src="song.cover" :alt="song.name" width="200">
        <a :href="song.player_page">{{song.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData(store) {
    return store.Music.$fetchMusic()
  },
  computed: {
    bestSongs() {
      return this.$store.Music.bestSongs
    }
  }
}
</script>

<style scoped>

</style>
