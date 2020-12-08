<template>
  <div class="car">
    <h2>Name: {{ carName }} = {{ reverseName }}</h2>
    <p>Year: {{ carYear }}</p>
    <p>{{ car }}</p>
    <button @click="changeName">change name</button>
    <button @click="changeFunc()">change from parent</button>
    <button @click="updateCounter">update counter</button>


    <div>
      <h2>Car</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ipsam!</p>
    </div>
  </div>
</template>

<script>
// для уровня вложенностей больше 2
import {eventEmitter} from './main'

export default {
  //props: ['carName', 'carYear'],
  props: {
    // Объявление типов принимаемых данных
    carName: String,
    carYear: Number,
    car: {
      type: String,
      default: 'Default name',
    },
    changeFunc: Function,

    // для уровня влож. уже это не нужно
    //counter: Number
  },
  methods: {
    changeName() {
      this.carName = 'lada'
      // $emit у каждого компонента во вью есть метод эмит. он принимает название события, которое будет прослушиваться
      // второй параметр значения которымы мы хотим уведомить родителя
      // создать кастомный евент
      this.$emit('nameChanged', this.carName)
    },
    updateCounter() {
      // обращение к данному компоненту this, и говорили ему что он будет экспоритровать наружу событие counterUpdated
      //this.$emit('counterUpdated', this.counter +1)

      // упрощенный вариант, если у нас уровень вложенностей компонентов больше 2
      // тут не нужно передавать никакой пайлоад, т.к. не нужно синхронизировать 3 компонента
      eventEmitter.$emit('counterUpdated')
    }
  },
  computed: {
    reverseName() {
      // в таком случае в родительском все еще сохранен киа
      return this.carName.split('').reverse().join('')
    }
  },
  //data: function ()
  data() {
    return {
      //carName: 'kia',
      //carYear: 2019,
    }
  }
}
</script>
<style scoped>
  /* добавление слова scoped позволяет применить стили изолированно */
  .car {
    border: 1px solid black;
  }

  /*// все стили глобальные*/
  div {
    border: 2px solid black;
  }

  h2 {
    color: rebeccapurple;
  }
</style>
