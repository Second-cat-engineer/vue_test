// здесь мы должны настроить сам объект сторе, объект который будет отвечать за состояние всего приложение
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// по дефолту нужно экспортировать результат работы конструктора библиотеки vuex.
// т.е мы создаем новый элемент у объекта vuex и у его подобъекта store.
// Store конструктор и в конструктор мы передаем объект конфигурации
export default new Vuex.Store({
  // объект который описывает все состояние приложения
  state: {
    // если здесь поставить 10, то оно отобразится. следовательно компонент Сounter считывает данное значение
    counter: 0
  }
})



// в чем профит? у всего приложения имеется одно определенное состояние. И мы внутри любого компонента
// можем получить доступ к этому состояниею, соответственно в любом компоненте мы можем изменить это состояние
// которое моментально отобразится в любом другом месте.
