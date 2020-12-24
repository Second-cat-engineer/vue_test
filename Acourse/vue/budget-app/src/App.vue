<template>
  <div id="app">
    <BudgetList :list="list" />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";

export default {
  name: 'App',
  components: {
    BudgetList,
  },
  data() {
    return {
      list: {
        1: {
          type: 'INCOME',
          value: 100,
          comment: 'some comment',
          id: 1,
        },
        2: {
          type: 'OUTCOME',
          value: -10,
          comment: 'some outcome comment',
          id: 2,
        }
      }
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
