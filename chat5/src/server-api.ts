class Api {

    static getItems() {
        return this.get('/groups/items');
    }

    static getUsers() {
        return this.get('/users');
    }

    static getGroups() {
        return this.get('/groups');
    }

    static createUser(user = {}) {
        return this.post('/users', user);
    }

    static addMessage(msg: any, id: string) {
        return this.post('/groups/message', {msg,id});
    }

    static addUserToGroup(groupId: string, userId: string) {
        return this.post('/groups/items', {groupId,userId});
    }

    static updateUser(user = {}) {
        return this.put('/users', user);
    }

    static deleteUser(id: string) {
        return this.delete('/users', id);
    }


    static checkLogin(username: any, password: string) {
        return this.post('/users/login', {username,password});
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









