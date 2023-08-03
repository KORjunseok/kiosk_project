import Order_Customers from '../models/order_customers.js';
import Order_Items from '../models/order_items.js';

export default () => {
  Order_Customers.hasMany(Order_Items, {
    sourceKey: 'id',
    foreignKey: 'order_customers_id',
  });
};
