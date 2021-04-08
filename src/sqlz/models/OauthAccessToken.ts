import { Table, Column, Model, DataType, DefaultScope } from 'sequelize-typescript';

@Table({
  tableName: 'oauth_access_tokens',
  timestamps: true,
})
export default class OauthAccessToken extends Model {
  @Column({
    primaryKey: true,
  })
  id!: number;

  @Column(DataType.STRING)
  user_id!: string;

  @Column(DataType.STRING)
  scope!: string;

  @Column(DataType.STRING)
  revoked!: string;

  @Column(DataType.DATE)
  createdAt?: Date;

  @Column(DataType.DATE)
  updatedAt?: Date;

  @Column(DataType.DATE)
  deletedAt?: Date;

  @Column(DataType.DATE)
  expires_at?: Date;
}
