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
const models = require("../models");
class GroupsService {
    static getItems() {
        return new Promise((resolve, reject) => {
            resolve(models.ItemModel.buildTree());
        });
    }
    static addMessage(groupId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models.GroupModel.addMessage(groupId, message);
        });
    }
    static addItem(groupId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield models.GroupModel.addItem(groupId, userId);
            return yield models.ItemModel.buildTree();
        });
    }
    static getAllGroups() {
        return new Promise((resolve, reject) => {
            resolve(models.GroupModel.getGroups());
        });
    }
    static createGroup(group) {
        return new Promise((resolve, reject) => {
            if (!group) {
                reject('group required');
            }
            resolve(models.GroupModel.createGroup(group));
        });
    }
    static updateGroup(group) {
        return new Promise((resolve, reject) => {
            if (!group) {
                reject('group required');
            }
            resolve(models.GroupModel.updateGroup(group));
        });
    }
    static deleteGroup(groupId) {
        return new Promise((resolve, reject) => {
            if (!groupId) {
                reject('group id is required');
            }
            resolve(models.GroupModel.deleteGroup(groupId));
        });
    }
}
exports.default = GroupsService;
//# sourceMappingURL=groups.js.map