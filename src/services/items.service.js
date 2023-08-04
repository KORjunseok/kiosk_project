import ItemsRepository from '../repositories/items.repository.js';
import myCache from '../cache.js';
import Enum from '../db/models/enum.js';

class ItemsService {
  itemsRepository = new ItemsRepository();

  // 상품 추가
  createItem = async (name, price) => {
    const createItem = await this.itemsRepository.create({
      name,
      price,
    });
    return createItem;
  };

  // 상품 조회
  getItem = async () => {
    const getItem = await this.itemsRepository.get();
    if (!getItem.length) {
      return {
        menu: '현재 등록된 상품이 없습니다.',
      };
    }
    return {
      menu: getItem,
    };
  };

  // 상품 수정
  modifyItem = async (id, name, price) => {
    const modifyItem = await this.itemsRepository.modify(id, name, price);
    const findid = await this.itemsRepository.findid(id);
    console.log("확인용 콘솔 :", modifyItem)
    // console.log("서비스스스스스 :", modifyItem)console.log("서비스스스스스 :", modifyItem)
    if (!findid) {
      return {
        message: '상품 아이디를 확인해 주세요.',
      };
    }
    if (!name) {
      return {
        message: '상품 이름을 입력해 주세요.',
      };
    }
    if (!price) {
      message: '가격을 입력해 주세요.';
    }
    if (price < 0) {
      res.status(400).json({ message: '알맞은 가격을 입력해주세요.' });
    }
    return {
      message: '상품이 성공적으로 수정되었습니다.',
    }
  };

  // 상품 삭제 (수량 확인에 대한 API)
  removeItem = async (id ) => {
    const findid = await this.itemsRepository.findid(id);
    const checkItem = await this.itemsRepository.checkItem(id);
    // console.log(findid)
    if (!findid) {
      return  {
        message: '상품 아이디를 확인해 주세요.',
      };
    }
    if (checkItem.amount > 0) {
      return  {
        message: '현재 수량이 남아있습니다. 삭제하시겠습니까?',
      };
    }
    if (checkItem.amount === 0) {
      const removeItem = await this.itemsRepository.removeItem(id);
      if (removeItem) {
        return {
          message: '상품이 성공적으로 삭제되었습니다.',
        }
      }
    }
  }
  // 수량 존재 시 대답 여부에 따른 삭제 or 유지 
  answerRemoveItem = async (id, answer) => {
    const findid = await this.itemsRepository.checkItem(id);
    if(!findid) {
      return  {
        message: '상품 아이디를 확인해 주세요.',
      }};
  //node-cache를 이용한 방법 
  const removeid = myCache.get(`removeitem${id}`);
  if (answer === '예' && removeid === id ) {
    const removeItem = await this.itemsRepository.removeItem(id);
    if (removeItem) {
      return {
        message: '삭제가 완료 되었습니다.',
      }
    }
  } 
  }

}

export default ItemsService;
