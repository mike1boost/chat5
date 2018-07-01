import * as models from "../models"



class UsersService {
     static getAllUsers () {
        return new Promise((resolve, reject) => {
            resolve(models.UserModel.getUsers());
        })
    }

    static createUser (user:any) {
        return new Promise((resolve, reject) => {
            if(!user) {reject('user required')}
            resolve(models.UserModel.createUser(user));
        })
    }

    static updateUser (user:any) {
        return new Promise((resolve, reject) => {
            if(!user) {reject('user required')}
            resolve(models.UserModel.updateUser(user));
        })
    }

    static deleteUser (userId:any) {
        return new Promise((resolve, reject) => {
            if(!userId) {reject('user id is required')}
            resolve(models.UserModel.deleteUser(userId));
        })
    }
}

export default UsersService