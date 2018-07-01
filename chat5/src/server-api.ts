class Api {

    static getItems() {
        return this.get('/groups/items');
    }

    static getUsers() {
        return this.get('/users');
    }

    static createUser(user = {}) {
        return this.post('/users', user);
    }

    static updateUser(user = {}) {
        return this.put('/users', user);
    }

    static deleteUser(id: number) {
        return this.delete('/users', id);
    }

    static get(url:any) {
        return fetch(url)
            .then(res => res.json());
    }

    static post(url:any, body:any) {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    }

    static put(url:any, body:any) {
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    }

    static delete(url:any, params:any) {
        const req = `${url}/${params}`;
        return fetch(req, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    }
}

export default Api









