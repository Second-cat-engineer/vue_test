<template>
  <div>
    <button class="on" :class="{'active': value}" @click="onClick(true)">On</button>
    <button class="off" :class="{'active': !value}" @click="onClick(false)">Off</button>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    methods: {
      onClick (newValue) {
        this.$emit('input', newValue)
      }
    }
  }
</script>

<style scoped>
  button {
    border: none;
    padding: 5px 15px;
    cursor: pointer;
    margin-right: 20px;
    outline: none;
  }

  button:active {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, .5);
  }

  .on.active {
    background: green;
    color: #fff;
  }

  .off.active {
    background: red;
    color: #fff;
  }

</style>
