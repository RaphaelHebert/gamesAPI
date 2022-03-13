


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
        .createTable('games', tbl => {
            tbl.increments('game-id')
                .primary();
            tbl.text('game_name', 255)
                .unique()
                .notNullable();
        })
        .createTable('scores', tbl => {
            tbl.increments('score-id')
                .primary();
            tbl.timestamp('created_at')
                .notNullable()
                .defaultTo(knex.fn.now());
            tbl.integer('score')
                .unsigned()
                .notNullable();
            tbl.integer('user-id')
                .unsigned()
                .notNullable()
                .references('user-id')
                .inTable('users')
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT")
            tbl.integer('game-id')
                .unsigned()
                .notNullable()
                .references('game-id')
                .inTable('games')
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT")
        }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('scores')
        .dropTableIfExists('users')
        .dropTableIfExists('games')
};
