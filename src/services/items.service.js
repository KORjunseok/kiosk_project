import ItemsRepository from '../repositories/items.repository.js';
import Enum from '../db/models/enum.js';

class ItemsService {
  itemsRepository = new ItemsRepository();

  // 상품 추가 
  createItem =  async (name, price) => {

    const createItem = await this.itemsRepository.create({
      name,
      price
    });
    return createItem;
  };
}

export default ItemsService;
