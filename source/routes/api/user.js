import express from 'express';
import userController from '../../Controller/UserController';

const router = express.Router();

router.post('/', userController.create);

router.get('/:id', userController.getUser);

router.patch('/:id', userController.editUserPassword);

export default router;
