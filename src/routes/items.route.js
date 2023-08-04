import { Router } from 'express';
import ItemsController from '../controllers/itmes.controller.js';
import validator from '../middlewares/validation.js';
const router = Router();

const itemsController = new ItemsController();

//상품 추가
router.post('/items', validator.createItem, itemsController.makeItem);

// 상품 조회
router.get('/items', itemsController.getItemList);

// 상품 삭제
router.delete('/items/:id', itemsController.removeItem);

// 상품 수정
router.patch('/items/:id', itemsController.modifyItem);

// 상품 수정 (대답 여부 API)
router.delete('/response/items/:id', itemsController.answerRemoveItem);

export default router;
