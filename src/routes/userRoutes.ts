import { Router } from 'express';
import {
	Delegate,
	Guidelines,
	Licenses,
	NextNumber,
	RJ100ProfileInfo,
	users,
} from '../constant/userResponse';
import { baseController } from '../controller/baseController';
const router = Router();

router.get('/', baseController.apiMethod(users));
router.get('/:id/personal-info', baseController.apiMethod(RJ100ProfileInfo));
router.get('/delegates', baseController.apiMethod(Delegate));
router.get('/delegates/next-number', baseController.apiMethod(NextNumber));
router.get('/:id/licenses', baseController.apiMethod(Licenses));
router.get('/:id/licenses/guidelines', baseController.apiMethod(Guidelines));

export default router;
