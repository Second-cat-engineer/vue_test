import VueRouter from 'vue-router'
import Home from  './pages/Home'
// ниже будет ленивая загрузка данного модуля
//import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/CarFull';
import ErrorCmp from './pages/Error';

// реализована ленивая загрузка
const Cars = resolve => {
  require.ensure(['./pages/Cars.vue'], () => {
    resolve(
      require('./pages/Cars.vue')
    )
  })
}

export default new VueRouter({
  routes: [
    {
      path: '', // localhost:8080
      component: Home,
    },
    {
      path: '/cars', // localhost:8080/cars
      component: Cars
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full', //localhost:8080/car/10/full
          component: CarFull,
          name: 'carFull',
          // вызывается перед тем как зайти на текущий роут
          beforeEnter (to, from, next) {
            console.log('beforeEnter')
            if (true) {
              next(true)
            } else {
              next(false)
            }
          }
        }
      ]
    },
    {
      // редирект
      path: '/none',
      //redirect: '/cars'
      redirect: {
        name: 'carFull'
      }
    },
    {
      path: '*',
      component: ErrorCmp
    },
  ],
  // для удаления # в url
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash }
    }

    return {
      x: 0,
      y: 100,
    }
  }
})
