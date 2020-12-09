import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate';

// с помощью метода можно подключать различные плагины
// npm install vuelidate --save
Vue.use(Vuelidate)

new Vue({
  el: '#app',
  render: h => h(App)
})
