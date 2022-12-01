<template>
  <div class="item">
    <img class="cover" width="120" style="min-height: 120px" :src="image" alt="封面" />
    <p class="info-list" v-for="(info, i) of infoList" :key="info">
      <a :href="link" target="_blank" rel="noreferrer noopener" v-if="!i">{{ info }}</a>
      <span class="info-item" v-else>{{ info }}</span>
    </p>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  infoList: any[]
  image: string
  song?: string
  link?: string
}>()
</script>

<style scoped>
.item {
  overflow: hidden;
  font-size: 14px;
}

.cover {
  object-fit: cover;
  float: left;
  margin-right: 20px;
  border-radius: 3px;
}

.info-list {
  margin: 8px 0;
}

.info-list:first-of-type {
  font-size: 16px;
  margin-bottom: 20px;
}

.info-item {
  line-height: 1.6;
  margin: 0;
}
</style>
