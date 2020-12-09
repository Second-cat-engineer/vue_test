import Vue from 'vue'
import App from './App.vue'
import ColorDirective from './color.js'
import List from './List.vue';


/* глобальная регистрация директивы */
Vue.directive('colored', ColorDirective)

/* глобальная регистрация фильтра */
Vue.filter('uppercase', (value) => {
  return value.toUpperCase();
})

/* регистрация глобального миксина */

Vue.component('app-list', List)


new Vue({
  el: '#app',
  render: h => h(App)
})
