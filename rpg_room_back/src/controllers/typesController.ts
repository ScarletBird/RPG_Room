import { Request, Response } from 'express';
import knex from '../database/connection';

class TypesController {
    async index(request: Request, response: Response) {
        const types = await knex('types').select('*');
        // Seleciona types da database

        // Serialized types serve para deixar o get mais fácil de ver e identificar seus integrantes 
        const serializedTypes = types.map(type => {
            return {
                id: type.id,
                type: type.type,
                image_url: `http://192.168.1.111:3333/uploads/types/${type.image}`

            }
        })
        response.json(serializedTypes);
    }
}

export default TypesController;
