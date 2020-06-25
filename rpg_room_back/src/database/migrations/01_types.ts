import Knex from 'knex';

export async function up(knex: Knex) {
    // CRIAR a tabela
    return knex.schema.createTable('types', table =>{
        table.increments('id').primary();
        table.string('type').notNullable();
        table.string('image').notNullable();
    })
}

export async function down(knex: Knex) {
    // VOLTAR a tabela (DELETAR)
    return knex.schema.dropTable('types');
}