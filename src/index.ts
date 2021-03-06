import express from 'express';
import dotenv from 'dotenv';
import User from './sqlz/models/user.model';
import sequelize from './sqlz/models';
import userRoutes from './routes/user';

const app = express();
dotenv.config();
const { NODE_PORT } = process.env;
const PORT = NODE_PORT;
sequelize.addModels([__dirname + '/**/*.model.ts']);

//route
app.use('/api', userRoutes);

// app.get('/', async (req, res) => {
//   const users = await User.create({
//     name: 'your name',
//     email: 'email@gmail.com',
//     password: '123344',
//   });
//   res.send({
//     users,
//   });
// });
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
