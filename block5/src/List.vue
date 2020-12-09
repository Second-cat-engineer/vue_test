<template>
  <div>
    <h1>List</h1>
    <input type="text" v-model="searchCar">
    <ul>
      <!-- <li v-for="car of cars">{{ car }}</li> -->
      <li v-for="car of filteredCars">{{ car }}</li>
    </ul>

  </div>

</template>

<script>
import ListMixin from './listMixin.js'

export default {
  mixins: [ListMixin]
}
</script>
