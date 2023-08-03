import { Router } from 'express';
import UsersController from '../controllers/users.controller.js';
import validator from '../middlewares/validation.js'; 

const router = Router();

const usersController = new UsersController();

// 회원가입 기능
router.post('/signup', validator.createUser, usersController.signup);

// 로그인 기능
router.post('/login', usersController.loginUser);

export default router;
