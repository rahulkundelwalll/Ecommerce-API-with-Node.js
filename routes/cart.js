import express from "express";
import { updateCartProduct,addToCart, listCart,removeFromCart } from "../controller/cart.js";
import authenticateToken from '../middleware/auth.js';
const router = express.Router();

router.post('/add',authenticateToken,addToCart);
router.get('/list',authenticateToken,listCart);
router.put('/update', authenticateToken,updateCartProduct);
router.delete('/remove', authenticateToken,removeFromCart);

export default router;
