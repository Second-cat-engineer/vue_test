/*
const xhr = new XMLHttpRequest();
// открыли запрос
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
// подписались на событие загрузки. тут общение с сервером. если код ошибки 404 то обработчик ошибок не сработает
xhr.addEventListener('load', () => {
    console.log(xhr.responseText)
})
// событие обработки ошибок
xhr.addEventListener('error', () => {
    console.log('error')
})
xhr.send()
console.log(xhr)*/

const btn = document.querySelector('.btn-secondary');
const container = document.querySelector('.container');

btn.addEventListener('click', e => {
    getPosts(response => {
        //console.log(response)
        const fragment = document.createDocumentFragment();
        response.forEach(post => {
            const card = document.createElement('div');
            const cardBody = document.createElement('div');
            const title = document.createElement('h4');
            title.textContent = post.title;
            const content = document.createElement('p');
            content.textContent = post.body;
            cardBody.appendChild(title);
            cardBody.appendChild(content);
            card.appendChild(cardBody);
            fragment.appendChild(card);
            //console.log(cardBody)
        })
        container.appendChild(fragment);
    })
})

function getPosts(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.addEventListener('load', () => {
        //console.log(xhr.responseText)
        const response = JSON.parse(xhr.responseText);
        cb(response)
    })
    xhr.addEventListener('error', () => {
        console.log('error')
    })
    xhr.send()
}
