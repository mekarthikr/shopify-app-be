import { Router } from 'express';
import { userController } from '../controller/userController';

const router = Router();

router.post('/', userController.addUser);

export default router;
