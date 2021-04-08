import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { sendError, sendSuccess } from '../../helpers/ResponseApi';
import { auth } from '../../config/app';
import AdminUser from '../../sqlz/models/AdminUser.model';

const AuthenticationController = {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const adminUser = await AdminUser.findOne({
      where: {
        email,
        password,
      },
    });
    if (adminUser) {
      // eslint-disable-next-line max-len
      const token = jwt.sign(
        { username: adminUser.email, id: adminUser.id, full_name: adminUser.full_name },
        auth.accessTokenSecret,
        { expiresIn: '1y' }
      );
      sendSuccess(res, 'Login success', { token });
    }
    sendError(res, 401, 'Invalid email or password', null);
  },
};
export default AuthenticationController;
