<template>
  <div class="music-item" :style="{backgroundImage: `url(${cover})`}">
    <ul class="info-list">
      <li data-title="歌曲名">{{name}}</li>
      <li data-title="歌手">{{singer}}</li>
      <li data-title="专辑/年份">《{{album}}》 {{year}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    singer: String,
    album: String,
    year: Number,
    cover: String,
    link: String
  }
}
</script>

<style lang="less" scoped>
.music-item {
  width: 320px;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 6px;
  display: inline-block;
  background-color: #eee;
  .info-list {
    margin: 0;
    padding: 076y87u8;
    list-style: none;
    background-color: rgba(0,0,0,.8);
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    li {
      margin: 10px;
      font-size: 14px;
      color: white;
      line-height: 1.6;
    }
  }
}
[data-title]:before {
  content: attr(data-title);
  color: var(--theme-color);
  margin-right: 15px;
}
</style>
