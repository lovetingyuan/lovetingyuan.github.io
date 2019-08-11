<template>
  <div>
    this is <article> list </article>
    <p>{{category}}</p>
  </div>
</template>

<script>
export default {
  created () {
  },
  computed: {
    category () {
      return this.$route.params.category
    }
  }
}
</script>
