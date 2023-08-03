import Items from '../db/models/items.js';
// import Options from '../db/models/options.js';

class ItemsRepository {
  async create(items) {
    return Items.create(items);
  }
}

export default ItemsRepository;
