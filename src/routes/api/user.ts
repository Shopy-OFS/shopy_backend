import { Router } from 'express';
import UserController from '../../controllers/UserController';
import CreateUserRequest from '../../requests/user/CreateUserRequest';

const UserRoutes = Router();

UserRoutes.get('/users', UserController.index);
UserRoutes.get('/users/:id', UserController.show);
UserRoutes.post('/users', CreateUserRequest, UserController.store);
UserRoutes.put('/users/:id', UserController.update);
UserRoutes.delete('/users/:id', UserController.destroy);

export default UserRoutes;
