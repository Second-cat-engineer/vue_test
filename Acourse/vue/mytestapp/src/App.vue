<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <p>{{rest}}, {{ num > 1 }}, {{ obj }}</p>
    <a v-bind:href="linkUrl">google</a>
    <a :[attrKey]="linkUrl">g</a>
    <div class="message" v-if="msgIsVisible">Show message!</div>
<!--    <div class="message" v-if="!msgIsVisible">-->
    <div class="message" v-else>now message!</div>

    <div class="message" v-if="number === 1">1</div>
    <div class="message" v-else-if="number === 2">2</div>
    <div class="message" v-else>now message!</div>

    <div v-show="false">as;df;sdf</div>

    <div class="name-input" v-if="inputNameVisible">
      <label>Name</label>
      <input type="text" placeholder="input name" key="name-input"/>
    </div>
    <div class="nickname-input" v-else>
      <label>nick Name</label>
      <input type="text" placeholder="input nickname" key="nickname-input"/>
    </div>
    <button @click="inputNameVisible = !inputNameVisible">change form</button>
    <hr>
    <button @click.middle="onClick($event, 'some')">Click me</button>
    <a href="" @click.prevent="onLinkClick">link</a>
    <hr>
    <input type="text" @keyup.enter="onKeyUp"/>{{ text }}
    <hr>
    <ul>
      <li v-for="(color, id) in colors" :key="id">{{ id }} = {{ color }}</li>
      <div>
        Add<input type="text" @keyup.enter="addNewColor">
        Delete<input type="text" @keyup.enter="deleteColor">
      </div>
    </ul>
    <hr>
    <ul>
      <li v-for="user in users" :key="user.id">{{user.name}} - {{ user.age }}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="(value, name, index) in product" :key="index">
        {{ index }}: {{ name }} - {{ value }}
      </li>
      Delete<input type="text" @keyup.enter="deleteProp">
    </ul>
    <hr>
    <p>Hello {{ fullName }}</p>
    FirstName<input type="text" @keyup.enter="setName">
    FirstName<input type="text" @keyup.enter="setLastName">
    <hr>
    <p>{{ testName }}</p>
    testName<input type="text" @keyup.enter="setTestName">
    <hr>
    <h1 class="title" :class="[classObj, activeClass]">Hello</h1>
    <hr>
    <child :second-props="secondProps" :title="title" @onChangeCounter="onChangeCounterInChild"/>
    <hr>
    <input type="text" v-model="textComputed" placeholder="отредактируй меня"/>{{ propForVModel }}
    <div class="checkbox">
      <input type="checkbox" v-model="checkbox"> {{ checkbox }}
    </div>
    <hr>
    <input type="checkbox" v-model="checkboxArray" value="1">
    <input type="checkbox" v-model="checkboxArray" value="2">
    <input type="checkbox" v-model="checkboxArray" value="3">
    <p>{{ checkboxArray }}</p>
    <hr>
    <select v-model="select">
      <option value="bmw">bmw</option>
      <option value="audi">audi</option>
    </select>
    {{ select }}
    <hr>
    <textarea v-model="messageTextarea" placeholder="введите несколько строчек"></textarea>
    <p style="white-space: pre-line;">{{ messageTextarea }}</p>
  </div>
</template>

<script>
import Child from './components/HelloWorld.vue';

export default {
  name: 'App',
  data: () => ({
    rest: 'test',
    num: 2,
    obj: {
      name: 'test',
      age: 42,
    },
    linkUrl: 'https://google.com',
    attrKey: 'href',
    msgIsVisible: false,
    number: 1,
    inputNameVisible: true,
    text: '',
    colors: ['red', 'yellow', 'black', 'blue'],
    users: [
      { id: 1, name: 'saf', age: 27 },
      { id: 2, name: 'saf', age: 28 },
      { id: 3, name: 'saf', age: 29 },
    ],
    product: {
      brand: 'nike',
      model: 'ball',
      price: 2000,
    },
    firstName: 'firstName',
    lastName: 'lastNam',
    first: '',
    last: '',
    activeClass: 'my-active-class',
    isActive: true,
    title: 'Some title to child',
    secondProps: 'second required props',
    propForVModel: '',
    checkbox: false,
    checkboxArray: [],
    select: '',
    messageTextarea: '',
  }),
  methods: {
    // e - объект события
    onClick(e, value) {
      console.log('click', e, value);
    },
    onLinkClick() {
      console.log('link click');
    },
    onKeyUp(e) {
      console.log(e);
      this.text = e.target.value;
    },
    addNewColor(e) {
      console.log(e);
      // const color = e.target.value;
      // this.colors.push(color);
      this.$set(this.colors, this.colors.length, e.target.value);
    },
    deleteProp(e) {
      console.log(e.target.value);
      this.$delete(this.product, e.target.value);
    },
    deleteColor(e) {
      this.$delete(this.colors, e.target.value);
    },
    setName(e) {
      this.firstName = e.target.value;
    },
    setLastName(e) {
      this.lastName = e.target.value;
    },
    setTestName(e) {
      this.testName = e.target.value;
    },
    onLastUpdate(value) {
      console.log(value);
    },
    onChangeCounterInChild(value) {
      console.log(value);
    },
  },
  computed: {
    fullName() {
      return `${this.firstName || 'Default'} ${this.lastName || 'User'}`;
    },
    testName: {
      get() {
        return `${this.first || 'undefined'} ${this.last || 'undefined'}`;
      },
      set(value) {
        // console.log(value);
        const [first, last] = value.split(' ');
        console.log(first, last);
        this.first = first;
        this.last = last;
      },
    },
    classObj() {
      return {
        'active-class': this.isActive,
        error: !this.isActive,
      };
    },
    textComputed: {
      get() {
        return this.propForVModel;
      },
      set(value) {
        // console.log(value);
        this.propForVModel = value;
      },
    },
  },
  watch: {
    last: 'onLastUpdate',
  },
  components: {
    Child,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
