<template>
  <div>
    <h2>喜欢的音乐</h2>
    <div class="music-list">
      <music-item v-for="song in bestSongs" :key="song.name" v-bind="song">
      </music-item>
    </div>
  </div>
</template>

<script>
import MusicItem from '@/components/MusicItem.vue'

export default {
  components: { MusicItem },
  asyncData (store) {
    return store.Music.$fetchMusic()
  },
  computed: {
    bestSongs () {
      return this.$store.Music.bestSongs
    }
  }
}
</script>
<style lang="less" scoped>
.music-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  ::v-deep .music-item {
    margin: 50px 30px;
  }
}
</style>
