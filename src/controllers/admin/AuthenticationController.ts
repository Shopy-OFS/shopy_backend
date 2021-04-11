import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import moment from 'moment';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { sendError, sendSuccess } from '../../helpers/ResponseApi';
import { auth } from '../../config/app';
import AdminUser from '../../sqlz/models/AdminUser.model';
import OauthAccessToken from '../../sqlz/models/OauthAccessToken.model';

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
      const tokenPayload = {
        id: adminUser.id,
        email: adminUser.email,
        full_name: adminUser.full_name,
        scope: JSON.stringify([auth.scope.admin]),
      };
      const token = jwt.sign(
        tokenPayload,
        auth.accessTokenSecret,
        // eslint-disable-next-line comma-dangle
        { expiresIn: '31556952000' }
      );
      const jwtDecode: any = jwt_decode(token);
      const expireDate = moment(jwtDecode.exp * 1000).format('YYYY-MM-DD hh:mm');
      await OauthAccessToken.create({
        id: token,
        user_id: adminUser.id,
        scope: JSON.stringify([auth.scope.admin]),
        revoked: false,
        expires_at: expireDate,
      });

      return sendSuccess(res, 'Login success', { token });
    }
    return sendError(res, 401, 'Invalid email or password', null);
  },
  async logout(req: Request, res: Response) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      const oauthAccessToken = await OauthAccessToken.findByPk(token);
      if (oauthAccessToken) {
        oauthAccessToken.update({
          revoked: true,
        });
        return sendSuccess(res, 'logout success success', null);
      }
      return sendError(res, 401, 'Invalid token', null);
    }
    return sendError(res, 401, 'Invalid token', null);
  },
};
export default AuthenticationController;
