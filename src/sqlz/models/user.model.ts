import { Table, Column, Model, DataType, DefaultScope } from 'sequelize-typescript';

@DefaultScope(() => ({
  attributes: {
    exclude: ['password', 'createdAt', 'updatedAt'],
  },
}))
@Table({
  tableName: 'users',
  timestamps: true,
})
export default class User extends Model {
  @Column({
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column(DataType.STRING)
  name?: string;

  @Column(DataType.STRING)
  email?: string;

  @Column(DataType.STRING)
  password?: string;

  @Column(DataType.DATE)
  createdAt?: Date;

  @Column(DataType.DATE)
  updatedAt?: Date;
}
