//window.onload = function() {
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello'
        }
    });

    app.message = 'i have';

    var app2 = new Vue({
        el: '#app-2',
        data: {
            message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
        }
    })

    var app3 = new Vue({
        el: '#app-3',
        data: {
            seen: true
        }
    })

    var app4 = new Vue({
        el: '#app-4',
        data: {
            todos: [
                { text: 'Изучить JavaScript' },
                { text: 'Изучить Vue' },
                { text: 'Создать что-нибудь классное' }
            ]
        }
    })
    app4.todos.push({ text: 'Profit' })


    var app5 = new Vue({
        el: '#app-5',
        data: {
            message: 'Привет, Vue.js!'
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    })

    var app6 = new Vue({
        el: '#app-6',
        data: {
            message: 'Привет, Vue!'
        }
    })

    var saf = new Vue({
        el: '#saf',
        data: {
            message: 'title',
            // тут можно несколько переменных объявить
            styleCSS: '',
        },
        methods: {
          changeText() {
              this.message = 'Какой либо новый текст';
          }
        }
    })

//}


