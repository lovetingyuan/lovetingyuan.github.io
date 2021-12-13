<template>
<div class="item">
  <img class="cover" width="110" style="min-height: 110px" :src="image" alt="封面">
  <div class="info-list" v-for="(info, i) of infoList">
    <a :href="link" target="_blank" rel="noreferrer noopener" v-if="link && !i">{{info}}</a>
    <span class="info-item" v-else>{{info}}</span>
  </div>
</div>
</template>
<script lang="ts" setup>

defineProps<{
  infoList: any[],
  image: string
  link?: string
}>()

</script>

<style scoped>
.item {
  overflow: hidden;
  font-size: 14px;
}
.item a:hover {
  text-decoration: underline;
}
.cover {
  object-fit: cover;
  float: left;
  margin-right: 20px;
}
.info-list {
  display: flex;
  flex-direction: column;
  margin: 8px 0;
}
.info-list a {
  font-size: 15px;
  margin-bottom: 8px;
}
.info-item {
  line-height: 1.6;
  margin: 0;
}
</style>
