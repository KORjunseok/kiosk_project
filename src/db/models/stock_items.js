import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

class Stock_Items extends Model {}

Stock_Items.init(
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    items_id: DataTypes.BIGINT,
    state: DataTypes.BIGINT,
    amount: DataTypes.STRING,
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
    modelName: 'Stock_Items',
  },
);

export default Stock_Items;
