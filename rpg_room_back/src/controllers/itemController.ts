import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemController {
    async index(request:Request, response:Response){
        const { user_id, title, type_id, ambient_id, description, timeline_id, creation_date } = request.query;
        const items = await knex('items').select('*')
            .where((qb) => {
                if(user_id) {
                    qb.where('user_id', "=", String(user_id));
                }
                if(title) {
                    qb.where('title', "=", String(title));
                }
                if(type_id) {
                    qb.where('type', "=", String(type_id));
                }
                if(ambient_id){
                    qb.where('ambient', "=", String(ambient_id));
                }
                if(description) {
                    qb.where('description', "=", String(description));
                }
                if(timeline_id) {
                    qb.where('timeline', "=", String(timeline_id));
                }
                if(creation_date){
                    qb.whereBetween('creation_date', [`${String(creation_date)}T00:00:00.000Z`,`${String(creation_date)}T23:59:59.999Z`]);
                }
            });
        // Seleciona items da database

        // Serialized Items serve para deixar o get mais fácil de ver e identificar seus integrantes 
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                user_id: item.user_id,
                title: item.title,
                type: item.type_id,
                ambient: item.ambient_id,
                description: item.description,
                timeline: item.timeline_id,
                creation_date: item.creation_date,
            }
        })
        response.json(serializedItems);
    }

    async show(request: Request, response: Response) {
        const {id} = request.params;

        const item = await knex('items').where('id', id).first();

        if(!item){
            return response.status(400).json({ message: 'Item não encontrado.' });
        }

        return response.json({item});
    }

    async create(request:Request, response:Response){
        // Capturar itens da requisição
        const {
            user_id,
            title,
            type_id,
            ambient_id,
            description,
            timeline_id,
            creation_date,
        } = request.body;

        const item = {
            user_id,
            title,
            type_id,
            ambient_id,
            description,
            timeline_id,
            creation_date,
        }

        const inserted = await knex("items").insert(item);
        return response.json({
            id: inserted[0],
            ... item
        })

    }
}

export default ItemController;