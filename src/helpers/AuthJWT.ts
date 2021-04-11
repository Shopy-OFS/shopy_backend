import { Request } from 'express';
import jwt from 'jsonwebtoken';
import AdminUser from '../sqlz/models/AdminUser.model';

const AuthAdminUser = async (req: Request) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    const decode: any = jwt.decode(token);
    const { id } = decode;
    const user = await AdminUser.findByPk(id);
    return user;
  }
  return null;
};
// eslint-disable-next-line import/prefer-default-export
export { AuthAdminUser };
