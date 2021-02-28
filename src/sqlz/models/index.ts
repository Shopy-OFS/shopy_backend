import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
dotenv.config();
const driver = 'postgres';
const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: driver,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  storage: ':memory:',
  models: [__dirname + '/**/*.model.ts'],
});

export default sequelize;
