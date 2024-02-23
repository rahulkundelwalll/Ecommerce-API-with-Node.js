
import express from 'express';
import { getOrderDetails,placeOrder,getOrderHistory } from '../controller/order.js';
import authenticateToken from '../middleware/auth.js';

const router = express.Router();


router.get('/detail/:orderId',authenticateToken, getOrderDetails);
router.get('/history',authenticateToken, getOrderHistory);
router.post('/place',authenticateToken, placeOrder);

export default router;
