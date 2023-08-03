import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

class Order_Items extends Model {}

Order_Items.init(
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    items_id: DataTypes.BIGINT,
    order_customers_id: DataTypes.BIGINT,
    amount: { type: DataTypes.BIGINT, defaultValue: 0 },
    option_id: DataTypes.BIGINT,
    price: DataTypes.BIGINT,
  },
  {
    sequelize,
    modelName: 'Order_Items',
    timestamps: false,
  },
);

export default Order_Items;
