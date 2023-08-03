import Options from '../models/options.js';
import Order_Items from '../models/order_items.js';

export default () => {
  Options.hasMany(Order_Items, {
    sourceKey: 'id',
    foreignKey: 'options_id',
  });
};
