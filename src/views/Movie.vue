<template>
  <div>
    <h2>喜欢的电影</h2>
    <details open>
      <summary>
        吉卜力&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.ghibli.jp/works" target="_blank" rel="noopener">Ghibli</a>
      </summary>
      <div class="movie-list">
        <movie-item v-for="great in ghibli" :key="great.name" v-bind="great"></movie-item>
      </div>
    </details>

  </div>
</template>

<script>
import MovieItem from '@/components/MovieItem.vue'

export default {
  components: { MovieItem },
  asyncData (store) {
    return store.Movie.$fetchMovies()
  },
  computed: {
    ghibli () {
      return this.$store.Movie.ghibli
    }
  }
}
</script>

<style lang="less" scoped>
.movie-list {
  background-image: url('~@/assets/totoro.png');
  background-size: 80%;
  background-repeat: no-repeat;
  background-position-x: 200%;
}
::v-deep .movie-item {
  margin: 50px 0;
}
</style>
