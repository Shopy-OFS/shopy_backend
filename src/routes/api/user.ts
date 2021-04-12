import { Router } from 'express';
import UserController from '../../controllers/UserController';
import authenticateAdminJWT from '../../middleware/CheckAdminAuthenicate';
import authenticateAdminScopeJWT from '../../middleware/CheckAdminScope';
import CreateUserRequest from '../../requests/user/CreateUserRequest';
import UpdateUserRequest from '../../requests/user/UpdateUserRequest';

const UserRoutes = Router();
UserRoutes.use('/users', [authenticateAdminJWT, authenticateAdminScopeJWT]);
UserRoutes.get('/users', UserController.index);
UserRoutes.get('/users/:id', UserController.show);
UserRoutes.post('/users', CreateUserRequest, UserController.store);
UserRoutes.put('/users/:id', UpdateUserRequest, UserController.update);
UserRoutes.delete('/users/:id', UserController.destroy);

export { UserRoutes };
