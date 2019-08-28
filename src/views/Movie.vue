<template>
  <div>
    <h2>喜欢的电影</h2>
    <div class="totoro"></div>
    <details open class="ghibli-works">
      <summary>
        吉卜力&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.ghibli.jp/works" target="_blank" rel="noopener noreferrer">Ghibli</a>
      </summary>
      <div class="movie-list">
        <movie-item v-for="great in ghibli" :key="great.name" v-bind="great"></movie-item>
      </div>
    </details>

  </div>
</template>

<script>
import MovieItem from '@/components/MovieItem.vue'
import MovieModule from '@/modules/movie'

export default {
  components: { MovieItem },
  asyncData (store) {
    store.addModule('Movie', MovieModule)
    return store.Movie.$fetchMovies()
  },
  computed: {
    ghibli () {
      return this.$store.Movie.ghibli
    }
  },
  beforeDestroy () {
    this.$store.removeModule('Movie')
  }
}
</script>

<style lang="less" scoped>
.totoro {
  background-image: url('~@/assets/totoro.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top right;
  height: 30vw;
  position: absolute;
  top: 5vw;
  right: 4vw;
  width: 40vw;
  max-width: 400px;
  background-position: 30% 0;
}
.ghibli-works {
}
.movie-list {

}
::v-deep .movie-item {
  margin: 50px 0;
}
@media screen and (max-width: 544px) {
  ::v-deep .movie-item img {
    width: 33vw;
  }
}
</style>
