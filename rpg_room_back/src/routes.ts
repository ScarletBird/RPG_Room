//user = rpg = senha
import express from 'express';

import ItemController from './controllers/itemController'

import { celebrate, Joi } from 'celebrate';

const itemController = new ItemController();

const routes = express.Router();

routes.get('/items',itemController.index);
routes.get('/items/:id',itemController.show);
routes.post('/items',itemController.create);

export default routes;