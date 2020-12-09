<template>
  <div>
    <h1> Car id {{ id }}</h1>
    <!-- обычная кнопка на которую установлено прослушка события -->
    <button class="btn btn-sm btn-default" @click="goBackToCars"> Back </button>
    <br>
<!--<router-link class="btn btn-info" tag="button" :to="'/car/' + id + '/full'"> Full info </router-link>-->
    <router-link
      class="btn btn-info"
      tag="button"
      :to="{name: 'carFull', params: {id: id}, query: {name: 'lada', year: '2018'}, hash: '#scroll'}"
    >
      Full info
    </router-link>
    <hr>


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params['id']
      // или одно и то же
      //id: this.$router.currentRoute.params['id']
    }
  },
  watch: {
    $route (toR, fromR) {
      this.id = toR.params['id']
    }
  },
  methods: {
    goBackToCars () {
      this.$router.push('/cars')
    }
  },
  // будет вызываться перед тем как мы будем покидать данный роут
  beforeRouteLeave (to, fromR, next) {
    console.log('beforeRouteLeave')
    if (window.confirm('вы хотите покинуть страницу')) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style scoped>

</style>
