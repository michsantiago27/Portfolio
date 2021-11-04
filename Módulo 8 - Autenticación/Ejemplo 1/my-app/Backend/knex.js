const knex = require('knex');

const config = {
  client: 'pg',
  connection: {
        host: '4000',
        user: 'postgre',
        password: '',
        database: ''
  }  
};

const knexClient = knex(config);

module.exports = {
    knexClient
}