<template>
  <h1>
    counter: {{ counter }}
  </h1>

</template>

<script>
import {eventEmitter} from './main';

export default {
  // props: ['counter']
  data() {
    return {
      counter: 0,
    }
  },
  created() {
    eventEmitter.$on('counterUpdated', () => {
      this.counter++;
    })
  }
}
</script>

<style>
</style>
