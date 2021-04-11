import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'admin_users',
  timestamps: true,
})
export default class AdminUser extends Model {
  @Column({
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column(DataType.STRING)
  full_name!: string;

  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.STRING)
  password!: string;

  @Column(DataType.DATE)
  createdAt?: Date;

  @Column(DataType.DATE)
  updatedAt?: Date;

  @Column(DataType.DATE)
  deletedAt?: Date;
}
