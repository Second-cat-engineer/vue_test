import Vue from 'vue'
import Vuelidate from "vuelidate/src";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter';
import messagePlugin from '@/utils/massage.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyCtzTC21d5WDjk5qVVHAc2fWT8nd876Y4Q',
  authDomain: 'vue-sbs.firebaseapp.com',
  projectId: 'vue-sbs',
  storageBucket: 'vue-sbs.appspot.com',
  messagingSenderId: '988310941549',
  appId: `1:988310941549:web:641b16beb3517755287464`
})

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


