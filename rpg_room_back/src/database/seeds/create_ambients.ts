import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('ambient').insert([
        { ambient: 'Distópico', image: 'dystopia.svg' },
        { ambient: 'Mágico', image: 'magic.svg' },
        { ambient: 'Medieval', image: 'medieval.svg' },
        { ambient: 'Moderno', image: 'modern.svg' },
        { ambient: 'Steampunk', image: 'steampunk.svg' },
        { ambient: 'Utópico', image: 'utopia.svg' },
        { ambient: 'Outros', image: 'other.svg' },
    ])
}