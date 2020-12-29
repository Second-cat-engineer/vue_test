import Vue from "vue";
import Vuex from "vuex";
import moviesStore from "@/store/modules/movies";
import loader from "@/store/loader";
import notification from "@/store/notification";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    moviesStore,
    loader,
    notification
  }
});

export default store;
