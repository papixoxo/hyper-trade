import express from 'express';
import { getMetrics, getTokens, getMarkets } from '../controllers/apiController';

const router = express.Router();

router.get('/metrics', getMetrics);
router.get('/tokens', getTokens);
router.get('/markets', getMarkets);

export default router;
