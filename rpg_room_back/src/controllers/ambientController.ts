import { Request, Response } from 'express';
import knex from '../database/connection';

class AmbientTypesController {
    async index(request: Request, response: Response) {
        const ambients = await knex('ambient').select('*');
        // Seleciona ambient da database

        // Serialized ambient serve para deixar o get mais fácil de ver e identificar seus integrantes 
        const serializedAmbients = ambients.map(ambient => {
            return {
                id: ambient.id,
                ambient: ambient.ambient,
                image_url: `http://192.168.1.111:3333/uploads/ambients/${ambient.image}`

            }
        })
        response.json(serializedAmbients);
    }
}

export default AmbientTypesController;
