import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

class Users extends Model {}

Users.init(
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    nickname: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Users',
  },
);

export default Users;
