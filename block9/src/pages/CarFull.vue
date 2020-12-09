<template>
  <div>
<!--    <h3> Car name: Kia </h3>-->
<!--    <h5> car year: 2019 </h5>-->

    <h3> Car name: {{ $route.query.name }} </h3>
    <h5> car year: {{ $route.query.year }} </h5>
    <h5> year: {{ old }} </h5>

    <div class="scroll"></div>
    <h5 id="scroll"> hello from the bottom</h5>
    <div class="scroll"></div>
  </div>
</template>

<script>
export default {
  computed: {
    old () {
      return this.$route.query.year + ' года'
    }
  },
  beforeRouteEnter (to, fromR, next) {
    console.log('beforeRouteEnter')
    //next() или
    next(true)
  }
}
</script>

<style scoped>
.scroll {
  width: 100px;
  height: 1000px;
  background-color: #ccc;
}

</style>
