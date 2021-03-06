import User from '../sqlz/models/user.model';
import {Request, Response,  } from 'express';

const userController = {
  index: async (req: Request, res: Response) => {
    const data = await User.findAll();
    res.send(data);
  },
  show: async (req: Request, res: Response) => {
    // const data = await User.findOne({ where: { title: 'My Title' } });
    res.send(res);
  },
};

export default userController;
