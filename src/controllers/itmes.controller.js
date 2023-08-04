import ItemsService from '../services/items.service.js';

class ItemsController {
  itemsService = new ItemsService();

  // 상품 추가
  makeItem = async (req, res) => {
    try {
      const { name, price } = req.body;
      const makeItem = await this.itemsService.createItem(name, price);
      return res.status(201).json('상품 추가 성공적입니다.');
    } catch (error) {
      console.error('상품 추가 에러 :', error);
      res.status(400).json({ errorMessage: '상품 추가 실패했습니다.' });
    }
  };

  // 상품 전체 조회
  getItemList = async (req, res) => {
    // const { id2 } = req.query;
    try {
      const getItem = await this.itemsService.getItem();

      return res.status(201).json(getItem);
    } catch (error) {
      console.error('상품 조회 에러 :', error);
      res.status(400).json({ errorMessage: '상품 조회 실패했습니다.' });
    }
  };

  // 상품 수정
  modifyItem = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price } = req.body;
      const modifyItem = await this.itemsService.modifyItem(id, name, price);
      // console.log("확인용 콘솔 :", modifyItem)
      return res.status(201).json(modifyItem);
    } catch (error) {
      console.error('상품 수정 에러 :', error);
      res.status(400).json({ errorMessage: '상품 수정 실패했습니다.' });
    }
  };

  // 상품 삭제 (수량 확인에 대한 API)
  removeItem = async (req, res) => {
    try {
      const { id } = req.params;
      const removeItem = await this.itemsService.removeItem(id);

      return res.status(200).json(removeItem);
      // res.status(200).json({message : "상품이 성공적111으로 삭제되었습니다."});
    } catch (error) {
      console.error('상품 삭제 에러 :', error);
      res.status(400).json({ errorMessage: '상품 삭제 실패했습니다.' });
    }
  };

  // 상품 삭제 (대답 여부에 따른 API)
  answerRemoveItem = async (req, res) => {
    try {
      const { id } = req.params;
      const { answer } = req.body;
      const answerRemoveItem = await this.itemsService.answerRemoveItem(
        id,
        answer,
      );
      return res.status(201).json(answerRemoveItem);
    } catch (error) {
      console.error('상품 삭제 에러 :', error);
      res.status(400).json({ errorMessage: '상품 삭제 실패했습니다.' });
    }
  };
}
export default ItemsController;
