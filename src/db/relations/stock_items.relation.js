import Items from '../models/items.js';
import Stock_Items from '../models/stock_items.js';

export default () => {
  Stock_Items.belongsTo(Items, {
    targetKey: 'id',
    foreignKey: 'items_id',
  });
};
