<template>
  <div class="movie-item">
    <img :src="cover" :alt="name">
    <table class="movie-info-table">
      <tbody>
        <tr>
          <td>影片名称</td>
          <td>
            <a :href="'https://www.imdb.com/title/' + imdb" target="_blank" rel="noopener noreferrer">{{name}}</a>
            《{{origin_name}}》
          </td>
        </tr>
        <tr>
          <td>地区/年份</td><td>{{country}} ({{date}})</td>
        </tr>
        <tr>
          <td>导演</td><td>{{director}}</td>
        </tr>
        <tr>
          <td>制作单位</td><td>{{producer}}</td>
        </tr>
        <tr>
          <td>片长</td><td>{{duration}}</td>
        </tr>
      </tbody>
    </table>
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
.movie-info-table {
  align-self: center;
}
.movie-info-table tr td {
  padding: 10px 0;
  vertical-align: top;
}
.movie-info-table tr td:first-child {
  text-align: justify;
  text-align-last: justify;
  padding-left: 26px;
  padding-right: 18px;
  color: var(--theme-color);
  user-select: none;
}
.movie-item {
  display: flex;
  img {
    width: 180px;
    border-radius: 6px;
  }
}
</style>
