import { Router } from 'express';
import UserController from '../../controllers/UserController';

export default class UserRoutes {
    router: Router;
    private controller: UserController;

    constructor() {
        this.router = Router();
        this.controller = new UserController();

        this.init();
    }

    init(): void {
        this.router.get('/users', this.controller.index);
        this.router.get('/users/:id', this.controller.show);
        this.router.put('/users/:id', this.controller.update);
        this.router.delete('/users/:id', this.controller.destroy);
    }
}
