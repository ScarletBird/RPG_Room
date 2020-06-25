import Knex from 'knex';

export async function up(knex: Knex) {
    // CRIAR a tabela
    return knex.schema.createTable('items', table =>{
        table.increments('id').primary();
        table.integer('user_id').notNullable();
        table.string('title').notNullable();
        table.integer('type_id').notNullable();
        table.integer('ambient_id').notNullable();
        table.string('description').notNullable();
        table.string('timeline').notNullable();
        table.dateTime('creation_date').notNullable();
    })
}

export async function down(knex: Knex) {
    // VOLTAR a tabela (DELETAR)
    return knex.schema.dropTable('items');
}