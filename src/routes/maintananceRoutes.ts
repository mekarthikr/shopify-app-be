import { baseController } from '../controller/baseController';
import { Router } from 'express';
import { maintenance_message } from '../constant/maintenanceMessageResponse';

const router = Router();

router.get('/', baseController.apiMethod(maintenance_message));

export default router;
