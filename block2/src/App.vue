<template>
  <div>
    <h2> Parent {{ carName }}</h2>

<!--    <app-counter :counter="counter"></app-counter>-->
    <app-counter>
    </app-counter>

    <!--      v-bind:counter="counter"-->
    <app-car
      v-bind:carName="carName"
      v-bind:carYear="carYear"

      v-bind:changeFunc="changeNameToAudi"
      v-on:nameChanged="carName= $event"
      v-on:counterUpdated="counter = $event"
    ></app-car>

    <app-html>
      <h2 slot="title">HTML {{ exporter }}</h2>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, saepe.</p>
    </app-html>

  </div>
</template>

<script>
// Можно здесь, либо в файле main.js
import Car from './Car.vue'
import Counter from './Counter.vue'
import exportHTML from './exportHTML.vue';

  export default {
    name: 'app',
    data () {
      return {
        //msg: 'Welcome to App'
        carName: 'kia',
        carYear: 2018,
        // тоже не нужно
        // counter: 0,
        exporter: 'export',
      }
    },
    methods: {
      changeNameToAudi() {
        this.carName = 'audi';
      }
    },
    components: {
      appCar: Car,
      appCounter: Counter,
      appHtml: exportHTML,
    }
  }
</script>

<style>
</style>
