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
class GroupController {
    static getItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const serviceResult = yield services.GroupsService.getItems();
                res.status(200).json(serviceResult);
            }
            catch (e) {
                res.status(500).send(`Bad request ${e}`);
            }
        });
    }
    static getAllGroups(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const serviceResult = yield services.GroupsService.getAllGroups();
                res.status(200).json({ groups: serviceResult });
            }
            catch (e) {
                res.status(500).send(`Bad request ${e}`);
            }
        });
    }
    static createGroup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const group = req.body;
                const serviceResult = yield services.GroupsService.createGroup(group);
                res.status(200).json({ group: serviceResult });
            }
            catch (e) {
                res.status(500).send(`Bad request ${e}`);
            }
        });
    }
    static updateGroup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const group = req.body;
                const serviceResult = yield services.GroupsService.updateGroup(group);
                res.status(200).json({ group: serviceResult });
            }
            catch (e) {
                res.status(500).send(`Bad request ${e}`);
            }
        });
    }
    static deleteGroup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const groupId = req.params.id;
                const serviceResult = yield services.GroupsService.deleteGroup(groupId);
                res.status(200).json({ group: serviceResult });
            }
            catch (e) {
                res.status(500).send(`Bad request ${e}`);
            }
        });
    }
}
exports.default = GroupController;
//# sourceMappingURL=groups.js.map