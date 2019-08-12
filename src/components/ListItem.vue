<template>
  <li class="item">
    <img class="image" :src="itemImg" :alt="name">
    <ul class="info-list">
      <li v-for="(info, title) in itemList" :key="info" :data-title="title">
        {{info}}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    itemImg: String,
    itemList: Array
  }
}
</script>
