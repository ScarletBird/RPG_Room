//user = rpg = senha
import express from 'express';

import ItemController from './controllers/itemController';
import TypesController from './controllers/typesController';
import AmbientController from './controllers/ambientController'

import { celebrate, Joi } from 'celebrate';

const itemController = new ItemController();
const typesController = new TypesController();
const ambientController = new AmbientController();

const routes = express.Router();

routes.get('/items',itemController.index);
routes.get('/items/:id',itemController.show);
routes.post('/items',itemController.create);

routes.get('/types',typesController.index);
routes.get('/ambient',ambientController.index);

export default routes;