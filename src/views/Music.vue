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
import MusicModule from '@/modules/music'

export default {
  components: { MusicItem },
  asyncData (store) {
    store.addModule('Music', MusicModule)
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
    margin: 45px 0;
  }
}
</style>
<style lang="postcss" scoped>
@lost flexbox flex;

.music-list {
  lost-flex-container: row;
  lost-utility: clearfix;
}
.music-item {
  lost-column: 1/2 2 60px;
}
@media screen and (max-width: 680px) {
  .music-list {
    lost-center: 86%;
  }
  .music-item {
    lost-column: 1/1 1;
  }
}
</style>
