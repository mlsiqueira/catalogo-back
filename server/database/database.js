const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig);

connection.authenticate()
  .then(() => console.log('Conexão com a base de dados estabelecida com sucesso.\n'))
  .catch(err => console.error('Erro ao se conectar a base de dados:\n', err));

module.exports = connection;