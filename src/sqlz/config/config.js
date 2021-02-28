const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
module.exports.development = {
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  host: `${process.env.DATABASE_HOST}`,
  dialect: `${process.env.DATABASE_DRIVER}`,
};
