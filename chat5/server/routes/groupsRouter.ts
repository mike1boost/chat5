import * as express from 'express';
import * as controllers from "../controllers"


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

export default groupsRouter;