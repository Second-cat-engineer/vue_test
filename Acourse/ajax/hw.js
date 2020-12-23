const url = 'https://jsonplaceholder.typicode.com';

// DOM Element
const usersListEl = document.querySelector(".users-list");

const btn = document.querySelector('.btn-secondary');
btn.addEventListener('click', () => {
    getAllUsers(renderUsersList);
})
function getAllUsers(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}/users`);
    xhr.addEventListener('load', () => {
        if (xhr.status !== 200) {
            console.log('Error', xhr.status);
            return;
        }
        const response = JSON.parse(xhr.responseText);
        cb(response);
    })
    xhr.send();
}
function renderUsersList(users) {
    let fragment = users.reduce((acc, user) => {
        return acc + userListItemTemplate(user);
    }, "");
    usersListEl.insertAdjacentHTML("afterbegin", fragment);
}
function userListItemTemplate(user) {
    return `
    <button type="button" class="list-group-item list-group-item-action" data-user-id="${user.id}">
        ${user.name}
    </button>
    `;
}

const userInfoEl = document.querySelector(".user-info");
usersListEl.addEventListener('click', e => {
    let userId = e.target.dataset.userId;
    getOneUser(userId, renderUserInfo);
});
function getOneUser(id, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}/users/${id}`);
    xhr.addEventListener('load', () => {
        if (xhr.status !== 200) {
            console.log('Error', xhr.status);
            return;
        }
        const response = JSON.parse(xhr.responseText);
        cb(response);
    })
    xhr.send();
}
function renderUserInfo(user) {
    //console.log(user)
    userInfoEl.innerHTML = '';
    const template = userDetailedInfoTemplate(user);
    userInfoEl.insertAdjacentHTML("afterbegin", template);
}
function userDetailedInfoTemplate(user) {
    return `
        <div class="card border-dark mb-3">
        <div class="card-header">${user.name}</div>
        <div class="card-body text-dark">
          <h5 class="card-title">${user.email}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Nickname:</b> ${user.username}</li>
            <li class="list-group-item"><b>Website:</b> ${user.website}</li>
            <li class="list-group-item"><b>Company:</b> ${user.company.name}</li>
            <li class="list-group-item"><b>City:</b> ${user.address.city}</li>
          </ul>
        </div>
        <div class="card-footer bg-transparent border-dark">Phone: ${user.phone}</div>
      </div>
    `;
}

