import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { auth } from '../config/app';
import { sendError } from '../helpers/ResponseApi';

const authenticateAdminJWT = (req: Request, res: Response, next: Function) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    // eslint-disable-next-line consistent-return
    jwt.verify(token, auth.accessTokenSecret, (err) => {
      if (err) {
        sendError(res, 401, 'Invalid token', null);
      }
      next();
    });
  } else {
    sendError(res, 401, 'Invalid token', null);
  }
};
export default authenticateAdminJWT;
