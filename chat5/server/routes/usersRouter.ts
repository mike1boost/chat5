import * as express from 'express';
import * as controllers from "../controllers"


const usersRouter = express.Router();

usersRouter.get('/', controllers.UsersController.getAllUsers);
usersRouter.post('/', controllers.UsersController.createUser);
usersRouter.put('/', controllers.UsersController.updateUser);
usersRouter.delete('/:id', controllers.UsersController.deleteUser);
/* Login */
usersRouter.post('/login', controllers.UsersController.login);





export default usersRouter;