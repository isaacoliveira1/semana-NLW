import express, { response } from 'express';

import pointControllers from './controllers/pointsControllers'
import itemsControllers from './controllers/itemsControllers'


const routes = express.Router();

const pointsController = new pointControllers();
const itemsController = new itemsControllers();

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;