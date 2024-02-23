import express from 'express';
import { createCategories,listCategories } from '../controller/categories.js';

const router = express.Router();

router.post('/createcategories',createCategories);
router.get('/listcategories',listCategories);


export default router;