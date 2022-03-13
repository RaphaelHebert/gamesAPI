const knex = require('knex');
const configuration = require('../knexfile.js');
const { environment } = require('../configs/server');

module.exports = knex(configuration[environment]);