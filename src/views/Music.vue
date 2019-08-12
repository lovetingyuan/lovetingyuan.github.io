<template>
  <div>
    <h2>喜欢的音乐</h2>
    <ul class="music-list">
      <list-item
        v-for="song in bestSongs" :key="song.name"
       :item-img="">
      </list-item>
      <li v-for="song in bestSongs" :key="song.name" class="music-item clearfix">
        <img class="music-img" :src="song.cover" :alt="song.name">
        <ul class="music-info">
          <li data-title="歌曲名"><a :href="song.xiami" target="_blank" rel="noopener">{{song.name}}</a></li>
          <li data-title="演唱者">{{song.singer}}</li>
          <li data-title="专辑年份">{{song.album}} - {{song.year}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'

export default {
  components: { ListItem },
  asyncData (store) {
    return store.Music.$fetchMusic()
  },
  computed: {
    bestSongs () {
      const songs = this.$store.Music.bestSongs
      return {
        name: {
          label: '歌曲名称',

        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.music-list, .music-info {
  list-style: none;
}
.music-item {
  margin-bottom: 40px;
  display: flex;
}
.music-img {
  border-radius: 4px;
  width: 150px;
}
.music-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  li {
    font-size: .8em;
  }
}
[data-title]:before {
  content: attr(data-title);
  color: var(--theme-color);
  margin-right: 10px;
  font-size: 1.2em;
}
</style>
