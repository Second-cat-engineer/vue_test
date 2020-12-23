function http() {
    return {
        get(url, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener('error', () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                xhr.send();
            } catch (error) {
                cb(error);
            }
        },
        post(url, body, headers, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener('error', () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                if (headers) {
                    Object.entries(headers).forEach(([key, value]) => {
                        xhr.setRequestHeader(key, value);
                    });
                }

                xhr.send(JSON.stringify(body));
            } catch (error) {
                cb(error);
            }
        },
    };
}
const myHttp = http();


/*
как было бы с колбэками
myHttp.get(
    `https://jsonplaceholder.typicode.com/posts/1`,
    (err, res) => {
        if (err) {
            console.log('error', err);
            return;
        }
        myHttp.get(
            `https://jsonplaceholder.typicode.com/comments?postId=1`,
            (err, res) => {
                if (err) {
                    console.log('error', err);
                    return;
                }
                myHttp.get(
                    `https://jsonplaceholder.typicode.com/users/1`,
                    (err, res) => {
                        if (err) {
                            console.log('error', err);
                            return;
                        }
                        console.log('yes');
                    },
                );
            },
        );
    },
);*/

// Вот как на промисах
function getPost(id) {
    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        })
    });
}

function getPostComments(post) {
    const { id } = post; // const id = post.id;
    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve({ post, comments: res });             //resolve(res);
        })
    });
}

function getUserCreatedPost(data) {
    const { post: { userId } } = data;
    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/users/${userId}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve({ ...data, user: res });             //resolve(res);
        })
    });
}

getPost(5)
    .then(post => {
        //console.log(post);
        return getPostComments(post)
    })
    .then(data => {
        //console.log(data);
        return getUserCreatedPost(data);
    })
    .then(fullData =>
        console.log(fullData)
    )
    .catch(err =>
        console.log(err)
    )
    .finally(() =>
        console.log('finally')
    );



function getPost2(id) {
    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        })
    });
}
function getPostComments2(id) {
    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        })
    });
}

function getUserCreatedPost2(userId) {
    return new Promise((resolve, reject) => {
        myHttp.get(`https://jsonplaceholder.typicode.com/users/${userId}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        })
    });
}

// Promise.all([
//     getPost2(1),
//     getPostComments2(1),
//     getUserCreatedPost2(1)
// ])
//     //.then((fulldate) => console.log(fulldate));
//     .then(([post, comment, user]) => console.log(post, comment, user));



// Использование fetch
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => {
        return response.json();
    })
    .then(posts => console.log(posts))
    .catch(err => console.log(err))


function getPost2(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(posts => resolve(posts))
            .catch(err => reject(err))
    });
}
getPost2(1).then(post => console.log(post));

// упрощение
function getPost3(id) {
    const [userType, userId] = id.split('-');
    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(response => response.json());
}
getPost3('user-1').then(post => console.log(post));