console.log('second')
let sum = 0;

/*
while (true) {
    let value = +prompt("Введите число", '');
    if (!value) break; // (*)
    sum += value;
}
alert( 'Сумма: ' + sum );
*/


/*
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Значение на координатах (${i},${j})`, '');
        // если пустая строка или Отмена, то выйти из обоих циклов
        if (!input) break outer; // (*)
        // сделать что-нибудь со значениями...
    }
}
alert('Готово!');
*/


/*
// Напишите код, который выводит все простые числа из интервала от 2 до n
let n = 10;
nextPrime:
    for (let i = 2; i <= n; i++) { // Для всех i...
        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) continue nextPrime; // не подходит, берём следующее
        }
        alert( i ); // простое число
    }*/


/*
let a = 2 + 2;
switch (a) {
    case 3:
        alert( 'Маловато' );
        break;
    case 4:
        alert( 'В точку!' );
        break;
    case 5:
        alert( 'Перебор' );
        break;
    default:
        alert( "Нет таких значений" );
}
*/

/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('А родители разрешили?');
    }
}

let age = prompt('Сколько вам лет?', 18);
if ( checkAge(age) ) {
    alert( 'Доступ получен' );
} else {
    alert( 'Доступ закрыт' );
}*/


// showMessage(..)     // показывает сообщение
// getAge(..)          // возвращает возраст (в каком либо значении)
// calcSum(..)         // вычисляет сумму и возвращает результат
// createForm(..)      // создаёт форму (и обычно возвращает её)
// checkPermission(..) // проверяет доступ, возвращая true/false



var x = 'asd';
test();
function test() {
    console.log(x);
}