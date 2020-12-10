<template>
  <h2>Counter {{ counter }}</h2>
</template>

<script>
export default {
  //props: ['counter']
  computed: {
    counter () {
      return this.$store.state.counter
    }
  }
}
</script>

<style scoped>

</style>
