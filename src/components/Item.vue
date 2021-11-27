<template>
<div class="item">
  <img class="cover" :src="image" alt="封面">
  <div class="info-list" v-for="info of infoList">
    <span class="info-item">{{info}}</span>
  </div>
</div>
</template>
<script lang="ts" setup>

const props = defineProps<{
  infoList: any[],
  image: string
}>()

</script>

<style scoped>
.item {
  overflow: hidden;
  font-size: 14px;
}
.cover {
  width: 100px;
  /* height: 100px; */
  object-fit: contain;
  float: left;
  margin-right: 20px;
}
.info-list {
  display: flex;
  flex-direction: column;
  margin: 8px 0;
}
.info-item {
  line-height: 1.6;
  margin: 0;
}
</style>
