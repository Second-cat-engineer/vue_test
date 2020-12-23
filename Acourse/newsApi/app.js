// Custom Http Module
function MyHttp() {
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
                    if (Math.floor(xhr.status / 100) !== 2 ) {
                        cb(`error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });
                xhr.addEventListener('error', () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                if(headers) {
                    Object.entries(headers).forEach(([key, value]) => {
                        console.log(key, value);
                        xhr.setRequestHeader(key, value);
                    })
                }

                xhr.send(JSON.stringify(body));
            } catch (error) {
                cb(error);
            }
        },
    }
}

// Init http module
const http = MyHttp();

const newsService = (function () {
    // 'https://newsapi.org/v2/top-headlines?country=us&apiKey=77dbc7671399438a9e3d5542d4340dd6'
    const apiKey = '77dbc7671399438a9e3d5542d4340dd6';
    const apiUrl = 'https://newsapi.org/v2';
    const urlUrl = 'https://jsonplaceholder.typicode.com'

    return {
        topHeadlines(type = 'posts', cb) {
            let url = `${urlUrl}/${type}`;
            http.get(url, cb);
        },
    }

    // return {
    //     topHeadlines(country = 'ru', cb) {
    //         let url = `${apiUrl}/top-headlines?country=${ country }&category=technology&apiKey=${ apiKey }`;
    //         http.get(url, cb);
    //     },
    //     everything(query, cb) {
    //         let url = `${apiUrl}/everything?q=${query}&apiKey=${apiKey}`;
    //         http.get(url, cb);
    //     },
    // }
})();


//  init selects
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    loadNews();
});


// load news function
function loadNews() {
    newsService.topHeadlines('posts', onGetResponse);
}

//function on get response from server
function onGetResponse(err, res) {
    renderNews(res);
}

// function render news
function renderNews(news) {
    console.log(news);
    const newsContainer = document.querySelector('.news-container .row')

    let fragment = '';

    for (let key in news) {
        let el = newsTemplate(news.key);
        fragment += el;
    }

    // news.forEach(newsItem => {
    //     const el = newsTemplate(newsItem);
    //     fragment += el;
    // });
    console.log(fragment);
    newsContainer.insertAdjacentElement('afterbegin', fragment);
}

// news item template function
//function newsTemplate(news) {
function newsTemplate({ urlToImage, title, url, description }) {
    console.log(news);
    return `
        <div class="col s12">
            <div class="card"> 
                <div class="card-content">
                    <p>${ description || '' }</p>
                </div> 
                <div class="card-action">
                    <a href="${url}">Read more</a>
                </div>
            </div>
        </div>
    `
}








