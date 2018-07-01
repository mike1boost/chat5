"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers = require("../controllers");
const groupsRouter = express.Router();
groupsRouter.get('/', controllers.GroupsController.getAllGroups);
groupsRouter.post('/', controllers.GroupsController.createGroup);
groupsRouter.put('/', controllers.GroupsController.updateGroup);
groupsRouter.delete('/:id', controllers.GroupsController.deleteGroup);
groupsRouter.get('/items', controllers.GroupsController.getItems);
exports.default = groupsRouter;
//# sourceMappingURL=groupsRouter.js.map