import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('types').insert([
        { type: 'Antagonista', image: 'antagonist.svg' },
        { type: 'Artefato', image: 'artifact.svg' },
        { type: 'Chefe', image: 'boss.svg' },
        { type: 'Masmorra', image: 'dungeon.svg' },
        { type: 'Monstro', image: 'monster.svg' },
        { type: 'Personagem', image: 'character.svg' },
        { type: 'Quest', image: 'quest.svg' },
        { type: 'Outros', image: 'other.svg' },

    ])
}