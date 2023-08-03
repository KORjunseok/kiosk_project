import { Router } from 'express';
import ItemsController from '../controllers/itmes.controller.js';
import validator from '../middlewares/validation.js'; 
const router = Router();

const itemsController = new ItemsController();

//상품 추가 
router.post('/items', validator.createItem, itemsController.makeItem);
// router.get('/items', itemsController.getItemList);
// router.delete('/items/:id', itemsController.removeItem);
// router.delete('/response/items/:id', itemsController.answerRemoveItem);
// router.patch('/items/:id', itemsController.editItem);

export default router;
