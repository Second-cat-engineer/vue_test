<template>
  <div id="app">
    <Form @submitForm="onFormSubmit" />
    <TotalBalance :class="colorTotalBalance" :total="totalBalance" />
    <BudgetList :list="list"  @deleteItem="onDeleteItem"/>
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";

export default {
  name: 'App',
  components: {
    Form,
    BudgetList,
    TotalBalance,
  },
  data() {
    return {
      list: {
        1: {
          type: 'INCOME',
          value: 100,
          comment: 'зп',
          id: 1,
        },
        2: {
          type: 'OUTCOME',
          value: -10,
          comment: 'жкх',
          id: 2,
        },
      },
    };
  },
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0);
    },
    colorTotalBalance() {
      return {
        'positive-balance': this.resTotalBalance,
        'negative-balance': !this.resTotalBalance,
      };
    },
    resTotalBalance() {
      if (this.totalBalance >= 0) {
        return  true;
      }
      return false;
    },
  },
  methods: {
    onDeleteItem(id) {
      console.log(id);
      this.$delete(this.list, id);
    },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      }
      this.$set(this.list, newObj.id, newObj);
    },
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

.positive-balance {
  color: green;
}

.negative-balance {
  color: red;
}
</style>
