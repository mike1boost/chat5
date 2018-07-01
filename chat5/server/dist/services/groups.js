"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models = require("../models");
class GroupsService {
    static getItems() {
        return new Promise((resolve, reject) => {
            resolve(models.ItemModel.buildTree());
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