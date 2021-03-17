import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import User from '../sqlz/models/user.model';

const UserController = {
  async index(req: Request, res: Response) {
    try {
      const data = await User.findAll();
      res.send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async show(req: Request, res: Response) {
    const data = await User.findByPk(req.params.id);
    if (data) {
      res.send(data);
      return;
    }
    res.status(400).send({ message: 'Not found' });
  },

  async store(req: Request, res: Response) {
    if (validationResult(req).array().length > 0) {
      res.status(400).json(validationResult(req).array());
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
    res.send({
      message: 'create success',
      user,
    });
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
      res.send({
        message: 'update success',
        user,
      });
    }
    res.status(400).send({ message: 'Not found' });
  },

  async destroy(req: Request, res: Response) {
    const user = await User.findByPk(req.params.id);
    if (user) {
      user.destroy();
      res.send({
        message: 'delete success',
      });
    }
    res.status(400).send({ message: 'Not found' });
  },
};
export default UserController;
