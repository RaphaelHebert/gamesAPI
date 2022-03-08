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
  await knex('snake-scores').truncate()
  await knex('snake-scores').insert([
    {score: 1000, 'user-id': 1},
    {score: 24, 'user-id': 1},
    {score: 45, 'user-id': 2},
    {score: 32, 'user-id': 4},
  ]);
};
