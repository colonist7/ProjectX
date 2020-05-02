const axios = require('axios').default;

// To call some resource use syntax: Modelfactory().<YourResource>().method(<params>)
// Example is in src/core/routes/Pages/Test/TestPage.js line: 11
let slug = 'http://localhost:8080/';

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
        },
        Auth: () => {
            return {
                login: (userName, password) => {return axios({
                    url: slug + "api/Auth/Login",
                    method: "POST",
                    proxy: {
                      host: 'http://localhost',
                      port: 8080
                    },
                    data: {
                        userName,
                        password
                    }
                })},
                register: (userName, email, password, repeatPassword) => {
                    return axios({
                        url: slug + "api/Auth/Register",
                        method: "POST",
                        proxy: {
                            host: 'http://localhost',
                            port: 8080
                        },
                        data: {
                            userName,
                            email,
                            password,
                            repeatPassword
                        }
                    })
                }
            }
        }
    }
}

export default ModelFactory;