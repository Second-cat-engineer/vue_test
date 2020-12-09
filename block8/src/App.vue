<template>
<!--  Валидация формы-->
  <div class="container">
<!--    prevent для того, чтобы кнопка не перезагружала страницу-->
    <form class="pt-3" @submit.prevent="onSubmit">
<!--  Валидация емайла    -->
      <div class="form-group">
        <label for="email"> E-mail </label>
        <!-- инициализацию события необходимо делать на blur- потеря фокуса, чем на input -->
        <input
          type="email"
          id="email"
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          @blur="$v.email.$touch()" v-model="email"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">Email обязательный </div>
        <div class="invalid-feedback" v-if="!$v.email.email"> Поле должно быть email </div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail"> email зарегестрирован </div>
      </div>

<!--  Валидация пароля      -->
      <div class="form-group">
        <label for="password"> Password </label>
        <!-- инициализацию события необходимо делать на blur- потеря фокуса, чем на input -->
        <input
          type="password"
          id="password"
          class="form-control"
          :class="{'is-invalid': $v.password.$error}"
          @blur="$v.password.$touch()"
          v-model="password"
        >
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Пароль должен быть не менее {{ $v.password.$params.minLength.min }} символов.
          Сейчас оно из {{ password.length }} символов
        </div>
      </div>

      <!--  Повтор пароля      -->
      <div class="form-group">
        <label for="confirmPassword"> confirm password </label>
        <!-- инициализацию события необходимо делать на blur- потеря фокуса, чем на input -->
        <input
          type="password"
          id="confirmPassword"
          class="form-control"
          :class="{'is-invalid': $v.confirmPassword.$error}"
          @blur="$v.confirmPassword.$touch()"
          v-model="confirmPassword"
        >
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
          Пароли не совпадают
        </div>
      </div>

<!-- необходимо сделать так, чтобы на кнопку можно было нажимать только тогда, когда все поля валидны     -->
      <button class="btn btn-success" type="submit" :disabled="$v.$invalid">Submit</button>

      <!-- системное отображение состояния валидатора
      <p>{{ $v.email }}</p>-->
    </form>
  </div>

</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    onSubmit: function () {
      console.log('email', this.email);
      console.log('password', this.password);
    }
  },
  // За счет того что подключен дополнительный пакет доступно поле validators
  validations: {
    email: {
      required: required,
      email: email,
      // для создание своего валидатора
      uniqEmail: function (newEmail) {
        //return newEmail !== 'test@test.ru';
        if (newEmail === '') return true;
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const value = newEmail !== 'test@test.ru';
            resolve(value);
          }, 1000)
        })
      },
    },
    password: {
      minLength: minLength(6),
    },
    confirmPassword: {
      //sameAs: sameAs('password')
      sameAs: sameAs((vue) => {
        return vue.password
      })
    }
  }
}
</script>

<style>
</style>
