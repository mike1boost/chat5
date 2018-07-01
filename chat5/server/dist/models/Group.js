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
class Group {
    constructor(id, groupName, massages) {
        this.id = id;
        this.groupName = groupName;
        this.massages = massages;
    }
    static getGroups() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const groups = yield new DB_1.default('groups').getCollection();
                return groups['groups'].map((group) => {
                    return new Group(group.id, group.groupName, group.massages);
                });
            }
            catch (e) {
                alert(`Bad fetch ${e}`);
            }
        });
    }
    static createGroup(newGroup) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const status = yield new DB_1.default('groups').addElement(newGroup);
                return status;
            }
            catch (e) {
                alert(`Bad fetch ${e}`);
            }
        });
    }
    static updateGroup(updateGroup) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const status = yield new DB_1.default('groups').updateElement(updateGroup);
                return status;
            }
            catch (e) {
                alert(`Bad fetch ${e}`);
            }
        });
    }
    static deleteGroup(groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const status = yield new DB_1.default('groups').deleteElement(groupId);
                return status;
            }
            catch (e) {
                alert(`Bad fetch ${e}`);
            }
        });
    }
}
exports.default = Group;
//# sourceMappingURL=Group.js.map