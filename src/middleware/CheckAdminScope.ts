import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { auth } from '../config/app';
import { sendError } from '../helpers/ResponseApi';
import OauthAccessToken from '../sqlz/models/OauthAccessToken.model';

// eslint-disable-next-line consistent-return
const authenticateAdminScopeJWT = (req: Request, res: Response, next: Function) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    // eslint-disable-next-line consistent-return
    jwt.verify(token, auth.accessTokenSecret, async (err) => {
      if (err) {
        return sendError(res, 401, 'Invalid token', null);
      }
      const oauthAccessToken = await OauthAccessToken.findByPk(token);
      if (oauthAccessToken) {
        const { scope } = oauthAccessToken;
        const scopeDecode: string[] = JSON.parse(scope);
        if (!scopeDecode.includes(auth.scope.admin)) {
          return sendError(res, 403, 'Invalid scope', null);
        }
        return next();
      }
    });
  } else {
    return sendError(res, 401, 'Invalid token', null);
  }
};
export default authenticateAdminScopeJWT;
