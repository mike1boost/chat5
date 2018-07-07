"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers = require("../controllers");
const groupsRouter = express.Router();
/**  groups  **/
groupsRouter.get('/', controllers.GroupsController.getAllGroups);
groupsRouter.post('/', controllers.GroupsController.createGroup);
groupsRouter.put('/', controllers.GroupsController.updateGroup);
groupsRouter.delete('/:id', controllers.GroupsController.deleteGroup);
/**  messages  **/
groupsRouter.post('/message', controllers.GroupsController.addMessage);
groupsRouter.get('/items', controllers.GroupsController.getItems);
groupsRouter.post('/items', controllers.GroupsController.addItem);
exports.default = groupsRouter;
//# sourceMappingURL=groupsRouter.js.map