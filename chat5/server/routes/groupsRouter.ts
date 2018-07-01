import * as express from 'express';
import * as controllers from "../controllers"


const groupsRouter = express.Router();

groupsRouter.get('/', controllers.GroupsController.getAllGroups);
groupsRouter.post('/', controllers.GroupsController.createGroup);
groupsRouter.put('/', controllers.GroupsController.updateGroup);
groupsRouter.delete('/:id', controllers.GroupsController.deleteGroup);

groupsRouter.get('/items', controllers.GroupsController.getItems);

export default groupsRouter;