<template>
<div class="item">
  <img class="cover" width="100" :src="image" alt="封面">
  <div class="info-list" v-for="(info, i) of infoList">
    <a :href="link" target="_blank" rel="noreferer noopener" v-if="link && !i">{{info}}</a>
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
.info-item {
  line-height: 1.6;
  margin: 0;
}
</style>
