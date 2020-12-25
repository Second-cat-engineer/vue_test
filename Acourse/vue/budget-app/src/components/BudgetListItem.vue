<template>
  <div class="list-item">
    <span class="budget-comment">
      <i class="material-icons">{{ text }}</i>: {{ item.comment }}
    </span>
    <span class="budget-value" :class="colorBalance">{{ item.value }}</span>
  </div>
</template>

<script>
export default {
  name: 'BudgetListItem',
  props: {
    test: {
      type: Object,
    },
    item: {
      type: Object,
    }
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
  },
  computed: {
    text() {
      return this.item.type === 'INCOME' ? 'flight_land' : 'flight_takeoff';
    },
    colorBalance() {
      return {
        'positive-balance': this.resBalance,
        'negative-balance': !this.resBalance,
      };
    },
    resBalance() {
      if (this.item.type === 'INCOME') {
        return  true;
      }
      return false;
    },
  }
}
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: 30px;
  margin-right: 30px;
}

.positive-balance {
  color: green;
}

.negative-balance {
  color: red;
}
</style>