"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers = require("../controllers");
const usersRouter = express.Router();
usersRouter.get('/', controllers.UsersController.getAllUsers);
usersRouter.post('/', controllers.UsersController.createUser);
usersRouter.put('/', controllers.UsersController.updateUser);
usersRouter.delete('/:id', controllers.UsersController.deleteUser);
exports.default = usersRouter;
//# sourceMappingURL=usersRouter.js.map