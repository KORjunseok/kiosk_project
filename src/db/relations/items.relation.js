import Order_Items from '../models/order_items.js';
import Items from '../models/items.js';
import Stock_Items from '../models/stock_items.js';

export default () => {
  Items.hasMany(Order_Items, {
    sourceKey: 'id',
    foreignKey: 'items_id',
  }),
    Items.hasMany(Stock_Items, {
      sourceKey: 'id',
      foreignKey: 'items_id',
    });
};
