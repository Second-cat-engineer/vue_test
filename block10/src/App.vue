<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">car name</label>
      <input type="text" id="name" class="form-control" v-model.trim="carName">
    </div>

    <div class="form-group">
      <label for="name">car year</label>
      <input type="text" id="year" class="form-control" v-model.number="carYear">
    </div>

    <button class="btn btn-success" @click="createCar">Create car</button>
    <button class="btn btn-primary" @click="loadCars">Load Cars</button>

    <hr>
    <ul class="list-group">
      <li class="list-group-item"
      v-for="car of cars"
      :key="car.id"
      >
       {{ car.id }}: {{ car.name}} - {{ car.year }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
      carName: '',
      carYear: 2019,
      // Изначально пустой массив, но после того как будут забираться данные из сервера будет наполнятся
      cars: [],
      resource: null,

    }
  },
  methods: {
    createCar () {
      console.log('create car')
      const car = {
        name: this.carName,
        year: this.carYear,
      }
      // метод post возвращает проимис, и нужно его обработать, поэтому через точку(.) вызываем метод then
      this.$http.post('http://localhost:3000/cars', car)
        .then(response => {
          console.log(response.status)
          return response.json()
        })
        .then(newCar => {
          console.log(newCar)
        })

      //this.resource.save({}, car)
    },
    loadCars () {
      this.$http.get('http://localhost:3000/cars', {params: {id: 4}})
        .then(response => {
          return response.json()
        })
        .then(cars => {
          this.cars = cars;
          console.log(cars)
        })
      // this.resource.get().then(response => response.json())
      //   .then(cars => this.cars = cars)
    },
  },
  created() {
    this.resource = this.$resource('http://localhost:3000/cars')

    //если в файле main.js глобальная настройка, то здесь можно указать просто
    //this.resource = this.$resource('cars')
  }
}

// установка
//npm install vue-resource --save
// <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1">

//установка сервера
// npm install -g json-server
// npm install --save-dev json-server
</script>

<style>
</style>
