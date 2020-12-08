<template>
  <div>
<!--    /* без slot не сработает */-->
    <slot name="title"></slot>
    <hr>
    <hr>
    <slot name="content"></slot>

  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  /* сработает */
  h2 {
    color: red;
  }
</style>
