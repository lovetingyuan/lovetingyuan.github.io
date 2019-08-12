<template>
  <div class="movie-item">
    <img :src="cover" :alt="name">
    <ul class="info-list">
      <li data-title="影片名称">
        <a :href="'https://www.imdb.com/title/' + imdb" target="_blank" rel="noopener">{{name}}</a>
        《{{origin_name}}》
      </li>
      <li data-title="地区/年份">{{country}} ({{date}})</li>
      <li data-title="导演">{{director}}</li>
      <li data-title="制作单位">{{producer}}</li>
      <li data-title="片长">{{duration}}分钟</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    cover: String,
    imdb: String,
    origin_name: String,
    country: String,
    date: String,
    director: String,
    producer: String,
    duration: Number
  }
}
</script>

<style lang="less" scoped>
.movie-item {
  display: flex;
  img {
    width: 180px;
    border-radius: 6px;
  }
  .info-list {
    padding: 12px 0;
    margin: 0;
    margin-left: 26px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
}
[data-title]:before {
  content: attr(data-title);
  color: var(--theme-color);
  margin-right: 15px;
}
</style>
