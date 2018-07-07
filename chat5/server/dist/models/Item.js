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
class Item {
    static buildTree() {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield new DB_1.default('item').getCollection();
            const users = yield new DB_1.default('users').getCollection();
            const groups = yield new DB_1.default('groups').getCollection();
            const usersArr = users["users"];
            const groupsArr = groups["groups"];
            const itemsTree = this.magicTree(items, usersArr, groupsArr, null, null, null, null, null);
            return itemsTree;
        });
    }
    static magicTree(list, users, groups, idAttr, parentAttr, childrenAttr, messageAttr, nameAttr) {
        if (!idAttr)
            idAttr = 'id';
        if (!parentAttr)
            parentAttr = 'parent';
        if (!childrenAttr)
            childrenAttr = 'items';
        if (!messageAttr)
            messageAttr = 'message';
        if (!nameAttr)
            nameAttr = 'name';
        let treeList = [];
        let lookup = {};
        list.forEach(function (obj) {
            lookup[obj[idAttr]] = obj;
            obj[childrenAttr] = [];
            if (obj.type === "group") {
                const groupIndex = groups.findIndex((group) => group.id === obj.id);
                obj[nameAttr] = groups[groupIndex].groupName;
                obj[messageAttr] = groups[groupIndex].messages;
            }
            else {
                const userIndex = users.findIndex((user) => user.id === obj.id);
                obj[nameAttr] = users[userIndex].username;
            }
        });
        list.forEach(function (obj) {
            if (obj[parentAttr] != null) {
                lookup[obj[parentAttr]][childrenAttr].push(obj);
            }
            else {
                treeList.push(obj);
            }
        });
        return treeList;
    }
    ;
}
exports.default = Item;
//# sourceMappingURL=Item.js.map