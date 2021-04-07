import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { sendError, sendSuccess } from '../helpers/ResponseApi';
import User from '../sqlz/models/user.model';

const UserController = {
  async index(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      sendSuccess(res, null, { users });
    } catch (error) {
      sendError(res, 500, error.message, { error });
    }
  },

  async show(req: Request, res: Response) {
    const user = await User.findByPk(req.params.id);
    if (user) {
      sendSuccess(res, null, { user });
      return;
    }
    sendError(res, 404, 'Not found', null);
  },

  async store(req: Request, res: Response) {
    if (validationResult(req).array().length > 0) {
      sendError(res, 400, 'Bad request', validationResult(req).array());
      return;
    }
    const param = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    const user = await User.create({
      ...param,
    });
    sendSuccess(res, 'create success', { user });
  },

  async update(req: Request, res: Response) {
    const param = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    const user = await User.findByPk(req.params.id);
    if (user) {
      user.update(param);
      sendSuccess(res, 'update success', { user });
    }
    sendError(res, 400, 'Not found', null);
  },

  async destroy(req: Request, res: Response) {
    const user = await User.findByPk(req.params.id);
    if (user) {
      user.destroy();
      sendSuccess(res, 'delete success', null);
    }
    sendError(res, 400, 'Not found', null);
  },
};
export default UserController;
