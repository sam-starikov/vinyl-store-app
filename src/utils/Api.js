const onResponce = res => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl
        this._headers = headers
    }

    getAllData() {
        return fetch(`${this._baseUrl}/items`, {
            headers: this._headers,
        }).then(onResponce)
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users`, {
            headers: this._headers,
        }).then(res => res.json())
    }

    search(searchQuery) {
        return fetch(`${this._baseUrl}/items?search=${searchQuery}`, {
            headers: this._headers,
        }).then(onResponce)
    }
}

const config = {
    baseUrl: 'https://649009021e6aa71680ca6400.mockapi.io',
    headers: {
        'content-type': 'application/json',
    },
}

export const api = new Api(config)
