<template>
  <div class="music-item" :style="{backgroundImage: `url(${cover})`}">
    <table class="music-info-table">
      <tbody>
        <tr>
          <td>歌曲名</td>
          <td>
            {{name}}
          </td>
        </tr>
        <tr>
          <td>歌手</td><td>{{singer}}</td>
        </tr>
        <tr>
          <td>专辑</td><td>《{{album}}》{{year}}</td>
        </tr>
      </tbody>
    </table>
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
.music-info-table {
  align-self: center;
  background-color: rgba(0,0,0,.8);
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
}
.music-info-table tr td {
  padding: 5px 0;
  color: white;
  font-size: 14px;
  box-sizing: border-box;
  vertical-align: top;
}
.music-info-table tr td:first-child {
  text-align: justify;
  text-align-last: justify;
  padding-right: 16px;
  color: var(--theme-color);
  user-select: none;
  width: 70px;
}
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
