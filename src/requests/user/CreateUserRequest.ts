import { checkSchema } from 'express-validator';
import { Op } from 'sequelize';
import User from '../../sqlz/models/user.model';

const CreateUserRequest = checkSchema({
  password: {
    isLength: {
      bail: true,
      errorMessage: 'Password should be at least 8 chars long and maximum of 50 chars',
      options: { min: 8, max: 50 },
    },
  },
  name: {
    isLength: {
      bail: true,
      errorMessage: 'Name should be at least 7 chars long and maximum of 100 chars',
      options: { min: 7, max: 100 },
    },
  },
  email: {
    isEmail: {
      bail: true,
      errorMessage: 'Please enter a valid email address',
    },
    isLength: {
      bail: true,
      errorMessage: 'Emailshould be at least 7 chars long and maximum of 100 chars',
      options: { max: 100, min: 7 },
    },
    custom: {
      options: async (value, { req }) => {
        const user = await User.findAll({
          where: {
            email: {
              [Op.ne]: value,
            },
          },
        });
        if (user) {
          return true;
        }
        return false;
      },
      errorMessage: 'Email is exist ',
    },
  },
});
export default CreateUserRequest;
