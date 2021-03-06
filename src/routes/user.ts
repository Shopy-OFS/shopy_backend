import { Router } from 'express';
import userController from '../controllers/UserController';

const userRoutes = Router();

userRoutes.get('/users', userController.index);
userRoutes.get('/users/:id', userController.show);

export default userRoutes;
