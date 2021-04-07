import { Router } from 'express';
import AuthenticationController from '../../../controllers/admin/AuthenticationController';

const adminAuthRoutes = Router();
adminAuthRoutes.post('/admin/login', AuthenticationController.login);

export { adminAuthRoutes };
