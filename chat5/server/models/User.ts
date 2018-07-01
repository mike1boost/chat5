import DB from "../lib/DB"

class User {
    public id: string;
    public username: string;
    public age: number;

    constructor(id, username, age) {
        this.id = id;
        this.username = username;
        this.age = age;
    }

    static async getUsers() {
        try {
            const users = await new DB('users').getCollection();

            return users['users'].map((user) => {
                return new User(user.id, user.username, user.age)});
        } catch (e) {
            alert(`Bad fetch ${e}`);
        }
    }

    static async createUser(newUser:any) {
        try {
            const users = await new DB('users').addElement(newUser);
            return users['users'].map((user) => {
                return new User(user.id, user.username, user.age)});
        } catch (e) {
            alert(`Bad fetch ${e}`);
        }
    }

    static async updateUser(updateUser:any) {
        try {
            const users = await new DB('users').updateElement(updateUser);
            return users['users'].map((user) => {
                return new User(user.id, user.username, user.age)});
        } catch (e) {
            alert(`Bad fetch ${e}`);
        }
    }

    static async deleteUser(userId:any) {
        try {
            const users = await new DB('users').deleteElement(userId);
            return users['users'].map((user) => {
                return new User(user.id, user.username, user.age)});
        } catch (e) {
            alert(`Bad fetch ${e}`);
        }
    }
}

export default User;
