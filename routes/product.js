import express from "express";
import { createProduct, listProduct,ProductDetail } from "../controller/product.js";
const router = express.Router();

router.post('/create',createProduct);
router.get('/list/:id',listProduct);
router.get('/detail/:id',ProductDetail);

export default router;
