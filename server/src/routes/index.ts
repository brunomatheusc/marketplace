import { Router } from 'express';

import userRoutes from './user.routes';
import sessionRoutes from './session.routes';
import swaggerRoutes from './swagger.routes';
import EmailController from '../controllers/EmailController';
import productsRoutes from './products.routes';

const routes = Router();

routes.use(swaggerRoutes);

routes.use('/email', EmailController.verifyEmail);
routes.use('/users', userRoutes);
routes.use('/session', sessionRoutes);
routes.use('/products', productsRoutes);

export default routes;