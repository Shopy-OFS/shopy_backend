import { Request, Response } from 'express';
import User from '../sqlz/models/user.model';

export default class UserController {
  public async index(req: Request, res: Response) {
    try {
      const data = await User.findAll();
      res.send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  public async show(req: Request, res: Response) {
    const data = await User.findByPk(req.params.id);
    if (data) {
      res.send(data);
      return;
    }
    res.status(400).send({ message: 'Not found' });
  }

  public async update(req: Request, res: Response) {
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
      });
    }
    res.status(400).send({ message: 'Not found' });
  }

  public async destroy(req: Request, res: Response) {
    const user = await User.findByPk(req.params.id);
    if (user) {
      user.destroy();
      res.send({
        message: 'delete success',
      });
    }
    res.status(400).send({ message: 'Not found' });
  }
}