import { checkSchema } from 'express-validator';

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
      errorMessage: 'Email should be at least 7 chars long and maximum of 100 chars',
      options: { max: 100, min: 7 },
    },
  },
});
export default CreateUserRequest;
