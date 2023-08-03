import Order_Items from '../models/order_items.js';
import Items from '../models/items.js';
import Order_Customers from '../models/order_customers.js';
import Options from '../models/options.js';

export default () => {
  Order_Items.belongsTo(Items, {
    targetKey: 'id',
    foreignKey: 'items_id',
  }),
    Order_Items.belongsTo(Order_Customers, {
      targetKey: 'id',
      foreignKey: 'order_customers_id',
    }),
    Order_Items.belongsTo(Options, {
      targetKey: 'id',
      foreignKey: 'options_id',
    });
};
