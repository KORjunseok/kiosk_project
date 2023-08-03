import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

class Options extends Model {}

Options.init(
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    syrup: { type: DataTypes.BIGINT, defaultValue: 0 },
    shot_price: { type: DataTypes.BIGINT, defaultValue: 0 },
    hot: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    sequelize,
    modelName: 'Options',
    timestamps: false,
  },
);

export default Options;
