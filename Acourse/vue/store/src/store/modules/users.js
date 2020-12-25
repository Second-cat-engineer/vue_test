export default {
  namespace: true,
  state: {
    list: {
      1: {
        name: "name1",
        age: 42
      }
    }
  },
  getters: {
    usersList({ list }) {
      return Object.values(list);
    }
  },
  mutations: {},
  actions: {}
};