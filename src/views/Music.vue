<template>
  <div>
    <h2>喜欢的音乐</h2>
    <ul class="music-list">
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
export default {
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
.music-list, .music-info {
  list-style: none;
}
.music-item {
  margin-bottom: 40px;
}
.music-img {
  border-radius: 4px;
  float: left;
  margin-right: 40px;
  width: 150px;
}
.music-info {
  li {
    margin: 18px;
    font-size: .8em;
    &:before {
      content: attr(data-title);
      color: var(--theme-color);
      margin-right: 10px;
      font-size: 1.2em;
    }
  }
}
</style>
