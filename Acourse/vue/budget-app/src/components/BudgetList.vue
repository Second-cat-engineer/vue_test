<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="isEmpty">
        <div class="list-item" v-for="(item, prop) in list" :key="prop">
          <BudgetListItem :item="item" />
          <ElButton class="list-button" type="danger" size="mini" @click="deleteItem(item.id)">Delete</ElButton>
        </div>
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem";

export default {
name: 'BudgetList',
  components: {
    BudgetListItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    }
  },
  data() {
    return {
      testMessage: {
        title: 'testMessage',
        content: 'testContent',
      },
      header: 'BudgetList',
      emptyTitle: 'Empty List',
    };
  },
  computed: {
    isEmpty() {
      return Boolean(Object.keys(this.list).length);
    },
  },
  methods: {
    deleteItem(id) {
      const res =confirm('Удалить элемент');
      if (res) {
        this.$emit('deleteItem', id);
      }
    },
  },
}
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
</style>