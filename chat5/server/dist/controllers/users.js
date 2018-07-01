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
const services = require("../services");
class UserController {
    static getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const serviceResult = yield services.UsersService.getAllUsers();
                res.status(200).json(serviceResult);
            }
            catch (e) {
                res.status(500).send(`Bad request ${e}`);
            }
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const serviceResult = yield services.UsersService.createUser(user);
                res.status(200).json(serviceResult);
            }
            catch (e) {
                res.status(500).send(`Bad request ${e}`);
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const serviceResult = yield services.UsersService.updateUser(user);
                res.status(200).json(serviceResult);
            }
            catch (e) {
                res.status(500).send(`Bad request ${e}`);
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.id;
                const serviceResult = yield services.UsersService.deleteUser(userId);
                res.status(200).json(serviceResult);
            }
            catch (e) {
                res.status(500).send(`Bad request ${e}`);
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=users.js.map