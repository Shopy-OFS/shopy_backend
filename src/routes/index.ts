import express from 'express';
import UserRoutes from './api/user';

const routes = express();
const apiPrefix = '/api';
//api
routes.use(apiPrefix, new UserRoutes().router);

export default routes;
