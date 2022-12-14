import express from 'express';
import { allSales,singlesale,newsale, updateSale, deleteSale } from '../controllers/saleController.js';

const saleRouter = express.Router();

saleRouter.get('/sales',allSales);

saleRouter.get('/sales/:id',singlesale);

saleRouter.post('/sales',newsale);

saleRouter.patch('/sales/:id',updateSale);

saleRouter.delete('/sales/:id',deleteSale);

export default saleRouter;