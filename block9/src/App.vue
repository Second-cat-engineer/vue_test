<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link tag="li" class="nav-item" exact to="/" active-class="active">
            <a class="nav-link">home</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/cars" active-class="active">
            <a class="nav-link">cars</a>
          </router-link>

          <router-link tag="li" class="nav-item" to="/car/2" active-class="active">
            <a class="nav-link">car 2</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/car/4" active-class="active">
            <a class="nav-link">car 4</a>
          </router-link>
        </ul>
      </div>
    </nav>


<!--    <ul class="navbar-nav">
      <router-link tag="li" class="nav-item" exact to="/" active-class="active">
        <a class="nav-link">home</a>
      </router-link>
      <router-link tag="li" class="nav-item" to="/cars" active-class="active">
        <a class="nav-link">cars</a>
      </router-link>
&lt;!&ndash;      <li class="active">&ndash;&gt;
&lt;!&ndash;        &lt;!&ndash;<a href="/">home</a>&ndash;&gt;&ndash;&gt;
&lt;!&ndash;        <router-link to="/">home</router-link>&ndash;&gt;
&lt;!&ndash;      </li>&ndash;&gt;
&lt;!&ndash;      <li class="active">&ndash;&gt;
&lt;!&ndash;        <router-link to="/cars">cars</router-link>&ndash;&gt;
&lt;!&ndash;      </li>&ndash;&gt;
    </ul>-->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
