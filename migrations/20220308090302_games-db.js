/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('user-id')
                .primary();
            tbl.text('username', 255)
                .unique()
                .notNullable();
            tbl.text('email', 255)
                .unique()
                .notNullable();
            tbl.text('password', 255)
                .notNullable();
        })
        .createTable('snake-scores', tbl => {
            tbl.increments('score-id')
                .primary();
            tbl.timestamp('created_at')
                .defaultTo(knex.fn.now());
            tbl.integer('score')
                .unsigned()
                .notNullable();
            tbl.integer('user-id')
                .unsigned()
                .notNullable()
                .references('user-id')
                .inTable('users')
        }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('snake-scores')
};
