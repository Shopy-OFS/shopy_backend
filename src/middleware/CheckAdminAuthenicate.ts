import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import { auth } from '../config/app';
import { sendError } from '../helpers/ResponseApi';
import OauthAccessToken from '../sqlz/models/OauthAccessToken.model';

const authenticateAdminJWT = (req: Request, res: Response, next: Function) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    // eslint-disable-next-line consistent-return
    jwt.verify(token, auth.accessTokenSecret, async (err) => {
      if (err) {
        sendError(res, 401, 'Invalid token', null);
      }
      const oauthAccessToken = await OauthAccessToken.findByPk(token);
      if (oauthAccessToken) {
        if (moment(moment().format('YYYY-MM-DD hh:mm')).isAfter(oauthAccessToken.expires_at) === true) {
          sendError(res, 401, 'Invalid token', null);
        }
        next();
      }
    });
  } else {
    sendError(res, 401, 'Invalid token', null);
  }
};
export default authenticateAdminJWT;
