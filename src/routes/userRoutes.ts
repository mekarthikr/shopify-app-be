import { Router } from 'express';
import { userController } from '../controller/userController';

const router = Router();

router.post('/', userController.addUsers);

export default router;
