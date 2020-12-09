export default {
  data () {
    return {
      cars: ['kia', 'Lada', 'audi', 'bmw'],
      searchCar: '',
    }
  },
  computed: {
    filteredCars() {
      return this.cars.filter(car => {
        return car.toLowerCase().indexOf(this.searchCar.toLowerCase()) !== -1
      })
    }
  },
}
