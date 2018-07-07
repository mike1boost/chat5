"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models = require("../models");
class UsersService {
    static login(username, password) {
        return new Promise((resolve, reject) => {
            resolve(models.UserModel.loginUser(username, password));
        });
    }
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            resolve(models.UserModel.getUsers());
        });
    }
    static createUser(user) {
        return new Promise((resolve, reject) => {
            if (!user) {
                reject('user required');
            }
            resolve(models.UserModel.createUser(user));
        });
    }
    static updateUser(user) {
        return new Promise((resolve, reject) => {
            if (!user) {
                reject('user required');
            }
            resolve(models.UserModel.updateUser(user));
        });
    }
    static deleteUser(userId) {
        return new Promise((resolve, reject) => {
            if (!userId) {
                reject('user id is required');
            }
            resolve(models.UserModel.deleteUser(userId));
        });
    }
}
exports.default = UsersService;
//# sourceMappingURL=users.js.map