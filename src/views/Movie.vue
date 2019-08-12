<template>
  <div>
    <h2>喜欢的电影</h2>
    <ul>
      <li v-for="great in ghibli" :key="great.name">
        <div>
          <img :src="great.cover" :alt="great.name" width="120" style="float: left">
          <ul>
            <li data-title="影片名称">
              <a :href="great.imdb" target="_blank" rel="noopener">{{great.name}}</a>
              《{{great.origin_name}}》
            </li>
            <li data-title="地区/年份">{{great.country}} ({{great.date}})</li>
            <li data-title="导演">{{great.director}}</li>
            <li data-title="制作单位">{{great.producer}}</li>
            <li data-title="片长">{{great.duration}}分钟</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
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
[data-title]:before {
  content: attr(data-title);
  color: var(--theme-color);
  margin-right: 10px;
}
</style>
