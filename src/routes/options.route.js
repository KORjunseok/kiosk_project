import { Router } from 'express';
import OptionsControlller from '../controllers/options.controller.js';

const router = Router();

const optionsController = new OptionsControlller();

export default router;
