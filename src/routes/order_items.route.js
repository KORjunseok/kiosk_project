import { Router } from 'express';
import Order_ItemsController from '../controllers/order_items.controller.js';

const router = Router();

const order_itemsController = new Order_ItemsController();

export default router;
