import express from 'express';
import dotenv from 'dotenv';
import sequelize from './sqlz/models';
import routes from './routes/index';
import bodyParser from 'body-parser';
import multer from 'multer';

const app = express();
dotenv.config();
const { NODE_PORT } = process.env;
const PORT = NODE_PORT;

//Import models
sequelize.addModels([__dirname + '/**/*.model.ts']);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Route
app.use(routes);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
