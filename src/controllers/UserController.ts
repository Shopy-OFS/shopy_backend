import User from '../sqlz/models/user.model';
import { Request, Response } from 'express';

const userController = {
  index: async (req: Request, res: Response) => {
    const data = await User.findAll();
    res.send(data);
  },
  show: async (req: Request, res: Response) => {
    const data = await User.findByPk(req.params.id)
    if(data){
     res.send(data);
      return;
    }
    res.status(400).send({message: 'Not found'});
  },
  update: async (req: Request, res: Response) => {},
  destroy: async (req: Request, res: Response) => {},
};

export default userController;
