<template>
  <div>
    <div>
      <blog-content></blog-content>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Content from './blog/Content.vue'

export default {
  components: {
    blogContent: Content
  }
}
</script>
