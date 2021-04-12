import express from 'express';
import { adminAuthRoutes } from './api/admin/authenticate';
import { UserRoutes } from './api/user';

const routes = express();
const apiPrefix = '/api';
/* api */
routes.use(apiPrefix, UserRoutes);
routes.use(apiPrefix, adminAuthRoutes);

export default routes;
