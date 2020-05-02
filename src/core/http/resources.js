const axios = require('axios').default;

// To call some resource use syntax: Modelfactory().<YourResource>().method(<params>)
// Example is in src/core/routes/Pages/Test/TestPage.js line: 11


function ModelFactory () {
    return {
        Test: () => {
            return {
                get: () => {return axios({
                    url: "https://jsonplaceholder.typicode.com/todos/1",
                    method: "GET"
                })},
                post: (title, body, userId) => {return axios({
                    url: "https://jsonplaceholder.typicode.com/posts",
                    method: "POST",
                    data: {
                        title: title,
                        body: body,
                        userId: userId
                    },
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })}
            }
        }
    }
}

export default ModelFactory;