"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = require("../lib/DB");
class User {
    constructor(id, username, age) {
        this.id = id;
        this.username = username;
        this.age = age;
    }
    static loginUser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield new DB_1.default('users').getCollection();
                for (const user of users['users']) {
                    if (user.username === username && user.password === password) {
                        return { status: "successful login" };
                    }
                }
                return { status: "login fail" };
            }
            catch (e) {
                alert(`Bad fetch ${e}`);
            }
        });
    }
    static getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield new DB_1.default('users').getCollection();
                return users['users'].map((user) => {
                    return new User(user.id, user.username, user.age);
                });
            }
            catch (e) {
                alert(`Bad fetch ${e}`);
            }
        });
    }
    static createUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield new DB_1.default('users').addElement(newUser);
                return users['users'].map((user) => {
                    return new User(user.id, user.username, user.age);
                });
            }
            catch (e) {
                alert(`Bad fetch ${e}`);
            }
        });
    }
    static updateUser(updateUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield new DB_1.default('users').updateElement(updateUser);
                return users['users'].map((user) => {
                    return new User(user.id, user.username, user.age);
                });
            }
            catch (e) {
                alert(`Bad fetch ${e}`);
            }
        });
    }
    static deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield new DB_1.default('users').deleteElement(userId);
                return users['users'].map((user) => {
                    return new User(user.id, user.username, user.age);
                });
            }
            catch (e) {
                alert(`Bad fetch ${e}`);
            }
        });
    }
}
exports.default = User;
//# sourceMappingURL=user.js.map