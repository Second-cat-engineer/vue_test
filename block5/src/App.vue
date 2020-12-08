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
  </div>
</template>

<script>
// Создание своей директивы

export default {
  data () {
    return {
      title: 'Hi',
      visible: true,
    }
  },
  directives: {
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize = '10px'
      }
    }
  }
}
</script>

<style>
</style>
