import sequelize from './sequelize.js';
import Items from './models/items.js';
import Order_Items from './models/order_items.js';
import Relations from './relations/index.js';
import Stock_Items from './models/stock_items.js';
import Order_Customers from './models/order_customers.js';
import Options from './models/options.js';
import Users from './models/users.js';

Object.values(Relations).forEach(relationsFunction => {
  relationsFunction();
});

export {
  sequelize,
  Items,
  Stock_Items,
  Order_Customers,
  Options,
  Order_Items,
  Users,
};
