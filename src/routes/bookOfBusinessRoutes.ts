import { Router } from 'express';
import {
	chart,
	clientInfo,
	contractCount,
	contractSummary,
	contracts,
	pendingApplications,
	summary,
	totalAsset,
} from '../constant/bookOfBusinessResponse';
import { baseController } from '../controller/baseController';

const router = Router();

router.get('/asset-value/chart', baseController.apiMethod(chart));
router.get('/total-assets', baseController.apiMethod(totalAsset));
router.get('/contract-count', baseController.apiMethod(contractCount));
router.get(
	'/pending-applications',
	baseController.apiMethod(pendingApplications),
);
router.get('/contracts', baseController.apiMethod(contracts));
router.get('/summary', baseController.apiMethod(summary));
router.get('/contract/:id/summary', baseController.apiMethod(contractSummary));
router.get('/contract/:id/client-info', baseController.apiMethod(clientInfo));
router.get(
	'/pending-contract/:id/summary',
	baseController.apiMethod(clientInfo),
);
export default router;
