import { Router } from 'express';
import AuthenticationController from '../../../controllers/admin/AuthenticationController';

const adminAuthRoutes = Router();
adminAuthRoutes.post('/admin/login', AuthenticationController.login);
adminAuthRoutes.get('/admin/logout', AuthenticationController.logout);

// eslint-disable-next-line import/prefer-default-export
export { adminAuthRoutes };
