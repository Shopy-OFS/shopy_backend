import { checkSchema } from 'express-validator';
import { Op } from 'sequelize';
import User from '../../sqlz/models/User.model';

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
      // eslint-disable-next-line arrow-body-style
      options: (value) => {
        return new Promise((resolve, reject) => {
          User.findAll({
            where: {
              email: {
                [Op.eq]: value,
              },
            },
          }).then((users) => {
            // eslint-disable-next-line no-unused-expressions
            users.length > 0 ? reject(new Error('Email already exists.')) : resolve(true);
          });
        });
      },
    },
  },
});
export default CreateUserRequest;
