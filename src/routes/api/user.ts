import { Router } from 'express';
import UserController from '../../controllers/UserController';
import authenticateAdminJWT from '../../middleware/CheckAdminAuthenicate';
import CreateUserRequest from '../../requests/user/CreateUserRequest';

const UserRoutes = Router();
UserRoutes.use('/users', [authenticateAdminJWT]);
UserRoutes.get('/users', UserController.index);
UserRoutes.get('/users/:id', UserController.show);
UserRoutes.post('/users', CreateUserRequest, UserController.store);
UserRoutes.put('/users/:id', UserController.update);
UserRoutes.delete('/users/:id', UserController.destroy);

// eslint-disable-next-line import/prefer-default-export
export { UserRoutes };
