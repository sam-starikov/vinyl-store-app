export class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl
        this._headers = headers
    }

    getAllData() {
        return fetch(`${this._baseUrl}/products `).then(res => res.json())
    }
}

const config = {
    baseUrl: 'https://api.react-learning.ru',
    headers: {
        'content-type': 'application-json',
        authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDBjNGYzODRlZTQxOTk3NWZiZDMwMWUiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4NTI4MzI3LCJleHAiOjE3MTAwNjQzMjd9.hFwIhkSYXini5j5J0pyysePPmwOSy0SsvtxB-B6ocCQ',
    },
}

const api = new Api(config)
