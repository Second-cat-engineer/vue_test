<template>
  <div id="app">
    <h2>From inputs</h2>
    <!-- v-model - позволяет делать двухстороннее связывание моделя с шаблоном   -->
    <!-- в качестве значения нужно передать поле, которое будет связывать две данные сущности     -->
    <!--  модификаторы v-model - события, по которому изменяется модель (lazy если убрать фокус из инпута)  -->
    <input type="text" v-model.lazy="name">
    <b>{{ name }}</b>

    <hr><hr>
    <!-- <textarea>{{ textarea }}</textarea> -->
    <!-- в textarea сохраняются все переносы строк, просто при выводе оно не отображается стилями -->
    <textarea v-model="textarea">{{ textarea }}</textarea>
    <p>{{ textarea }}</p>

    <hr><hr>
    <!-- Вью работает с checkbox-сами таким образом: Он заводит 1 массив, который отвечает за однотипные чекбоксы и
        дальше он проверяет по значению каждого чекбокса, если значение чекбокса находится в массиве - это означает
        что он выбран, если нет - то не выбран -->
    <label>
      <input type="checkbox" value="instagram" v-model="socialCheckbox"> Instagram
    </label>
    <label>
      <input type="checkbox" value="vk" v-model="socialCheckbox"> Vk
    </label>
    <label>
      <input type="checkbox" value="telegram" v-model="socialCheckbox"> Telegram
    </label>
    <br>
    <ul>
      <li v-for="s in socialCheckbox">{{ s }}</li>
    </ul>

    <hr><hr>
    <!-- Работа с радио кнопками -->
    <label>
      <input type="radio" value="instagram" v-model="socialRadio"> Instagram
    </label>
    <label>
      <input type="radio" value="vk" v-model="socialRadio"> Vk
    </label>
    <label>
      <input type="radio" value="telegram" v-model="socialRadio"> Telegram
    </label>
    <br>
    <p>{{ socialRadio }}</p>

    <hr><hr>
    <!-- Работа с селектом -->
    <select v-model="socialListRes">
      <option v-for="s in socialList">{{ s }}</option>
      <!--<option v-for="s in socialList" :selected="s === defaultSocialList">{{ s }}</option>-->
    </select>
    <p>{{ socialListRes }}</p>

    <hr><hr>
    <!-- при добавление модификатора number вью будет следить только за числами. Если он не сможет привести к числу, то будет игнорировать    -->
    <input type="text" v-model.number="age">
    <p>{{ age }}</p>

    <hr><hr>
    <!-- создание своего контрола и накладывание на него директиву v-model.
     v-model по умолчанию передает свойство в компонент -->
    <app-onoff v-model="onOffSwitch"></app-onoff>
    <div>
      <h3 v-if="onOffSwitch"> component is enabled</h3>
      <h3 v-else> component is disabled</h3>
    </div>

  </div>
</template>

<script>
//создание своего контрола и накладывание на него директиву v-model
import Onoff from './Onoff.vue'

export default {

  data () {
    return {
      name: 'test',
      textarea: 'test text in textarea',
      // массив который отвечает за работу с checkbox
      // если нужно чтоб какой то элемент был выбран по умолчанию, то нужно его добавить в массив
      socialCheckbox: ['telegram'],
      // для радио кнопок является строкой, т.к. можно выбрать только 1 значение
      socialRadio: '',
      // Работа с селектом
      socialList: ['instagram', 'whatsapp', 'telegram', 'vk', 'facebook'],
      socialListRes: 'vk',

      // Работа с числами
      age: 20,

      //
      onOffSwitch: true,
    }
  },
  watch: {
    age (value) {
      console.log(value)
    }
  },
  // создание своего контрола и накладывание на него директиву v-model
  components: {
    appOnoff: Onoff,
  }

}
</script>

<style scoped>
  textarea {
    height: 200px;
    width: 200px;
  }

// для того чтобы отображались все переносы
  p {
    white-space: normal;
  }
</style>
