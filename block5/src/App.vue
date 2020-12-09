<template>
  <div>
    <!-- Динамически передача параметров    -->
    <h2 v-colored:background="'green'" >{{ title }}</h2>
    <h2 v-colored:color="'grey'" >{{ title }}</h2>

    <!-- статически   -->
    <h2 v-colored="'red'" >{{ title }}</h2>
    <!--
      <h2 v-colored v-if="visible">{{ title }}</h2>
      <button @click="visible = !visible">visible</button>
      <button @click="title = 'new title'">change title</button>
    -->

    <!--    -->
    <h2 v-colored:background.font="'green'" >{{ title }}</h2>
    <button v-on:click.prevent.stop>f</button>

    <h3 v-font>Local font directive</h3>

    <!-- vue при компиляции поймет, что необходимо применить фильтр    -->
    <h1>{{ title | lowercase }}</h1>
    <h1>{{ title | uppercase }}</h1>
    <!-- можно также применить несколько фильтров    -->
    <h1>{{ title | uppercase | lowercase }}</h1>

    <input type="text" v-model="searchCar">
    <ul>
      <!-- <li v-for="car of cars">{{ car }}</li> -->
      <li v-for="car of filteredCars">{{ car }}</li>
    </ul>
    <hr><hr>

    <app-list>



    </app-list>

  </div>
</template>

<script>
// импорт для фильтрации
import ListMixin from './listMixin.js'

export default {
  data () {
    return {
      title: 'Hi',
      visible: true,
      // так как функция фильтрации вынесен в отдельный файл свойства cars b searchCars
      // cars: ['kia', 'Lada', 'audi', 'bmw'],
      // searchCar: '',
    }
  },
  // Создание своей директивы
  directives: {
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize = '10px'
      }
    }
  },
  // регистрация миксина
  mixins: [ListMixin],
  // в этом случае нет необходимости писать код фильтра здесь, а вынести в отдельный файл.
  // и теперь несколько компонентов могут пользоваться функцией фильтрации, притом независимо
  // поэтому свойство computed уже не нужно, а также свойства cars b searchCars
  /*
  computed: {
    filteredCars() {
      return this.cars.filter(car => {
        return car.toLowerCase().indexOf(this.searchCar.toLowerCase()) !== -1
      })
    }
  },
  */

  // Это функции, и чтобы создать какой либо фильтр просто описываем функцию
  // функция должна вернуть новые данные, которую необходимо отобразить непосредственно в шаблоне
  // сами данные они не меняют, меняют только то как нужно отобразить данные
  // изначально во Вью нет зарегестрированных фильтров, все фильтры мы должны создавать сами
  filters: {
    lowercase(value) {
      return value.toLowerCase();
    }

  }
}
</script>

<style>
</style>
