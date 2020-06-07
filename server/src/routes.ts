import express, { response } from 'express';

import pointControllers from './controllers/pointsControllers'
import itemsControllers from './controllers/itemsControllers'
import multer from 'multer';
import multerConfig from './config/route'
import {celebrate, Joi} from 'celebrate'


const routes = express.Router();
const uploads = multer(multerConfig);

const pointsController = new pointControllers();
const itemsController = new itemsControllers();

routes.get('/items', itemsController.index)

routes.post(
    '/points', 
    uploads.single('image'), 
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {abortEarly: false}),

    pointsController.create);


routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;