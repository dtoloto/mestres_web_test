import { Router } from 'express';

import ProductController from '../../controllers/ProductController';

const productController = new ProductController();
const productRouter = Router();

// GET PRODUCTS
productRouter.get('/list', productController.index);

// CREATE PRODUCT
productRouter.post('/new', productController.create);

// EDIT PRODUCT
productRouter.post('/edit/:uuid', productController.edit);

// DELETE PRODUCT
productRouter.delete('/remove/:uuid', productController.delete);

export default productRouter;
