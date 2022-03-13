/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {username: 'Joe', email:"joedev010@gmail.com", password:"somecrypticstring"},
    {username: 'Raf', email:"raphaelhebert18@gmail.com", password:"anothercrypticstring"},
    {username: 'player1', email:"player1@gmail.com", password:"playerOnePassword" },
    {username: 'player2', email:"player2@gmail.com", password:"playerTwoPassword" },
  ]);
  await knex('games').truncate()
  await knex('games').insert([
    {"game_name": "snake"},
  ]);
  await knex('scores').truncate()
  await knex('scores').insert([
    {score: 200, "user-id": 1, "game-id": 1},
    {score: 3, "user-id": 2, "game-id": 1},
    {score: 34, "user-id": 1, "game-id": 1},
    {score: 32, "user-id": 3, "game-id": 1},
    {score: 200, "user-id": 4, "game-id": 1},
    {score: 20, "user-id": 4, "game-id": 1},
    {score: 20, "user-id": 3, "game-id": 1},
    {score: 43, "user-id": 1, "game-id": 1}
    ]);
};
