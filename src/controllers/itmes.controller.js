import ItemsService from '../services/items.service.js';

class ItemsController {
  itemsService = new ItemsService();

  makeItem = async (req, res) => {
    try {
    const { name, price} = req.body;
    const makeItem = await this.itemsService.createItem(
      name,
      price,
    );
    // console.log(makeItem)

    return res.status(201).json("상품 추가 성공적입니다." );
  } catch (error) {
    console.error('상품 추가 에러 :', error)
    res.status(400).json({ errorMessage: '상품 추가 실패했습니다.' });
  }
  };
}

export default ItemsController;
