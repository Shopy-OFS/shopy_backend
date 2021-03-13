import User from '../sqlz/models/user.model';
import { Request, Response } from 'express';

const UserController = {
  index: async (req: Request, res: Response) => {
    const data = await User.findAll();
    res.send(data);
  },
  show: async (req: Request, res: Response) => {
    const data = await User.findByPk(req.params.id);
    if (data) {
      res.send(data);
      return;
    }
    res.status(400).send({ message: 'Not found' });
  },
  update: async (req: Request, res: Response) => {
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
  },
  destroy: async (req: Request, res: Response) => {
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
