import Items from '../db/models/items.js';
// import Options from '../db/models/options.js';

class ItemsRepository {
  async create(items) {
    return Items.create(items);
  }

  async get() {
    return Items.findAll();
  }

  async modify(id, name, price) {
    const modify = await Items.update({name, price}, {where :{id} });
    return modify
  }
  
  async findid(id) {
    return Items.findByPk(id);
  }

  async checkItem(id) {
    const checkItem = await Items.findOne({ where: { id } });
    console.log("레파지토리 확인용 콘솔 :", checkItem)

    return checkItem;
  }

    async removeItem(id) {
    const removeItem = await Items.destroy({ where: { id } });
    return removeItem;
  };





}

export default ItemsRepository;
