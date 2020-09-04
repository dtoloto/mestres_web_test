import { Router } from 'express';
import productRouter from './Product/Product.routes';

const routes = Router();

routes.use('/product', productRouter);

export default routes;
