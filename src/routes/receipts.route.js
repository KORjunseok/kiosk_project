import { Router } from 'express';
import ReceiptsController from '../controllers/receipts.controller.js';

const router = Router();

const receiptsController = new ReceiptsController();

export default router;
