const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Director = require('../models/director.model');
const Actor = require('../models/actor.model');
const Movie = require('../models/movie.model');

const connection = new Sequelize(dbConfig);

Director.init(connection);
Actor.init(connection);
Movie.init(connection);

Director.associate(connection.models);
Actor.associate(connection.models);
Movie.associate(connection.models);

connection.authenticate()
  .then(() => console.log('Conexão com a base de dados estabelecida com sucesso.\n'))
  .catch(err => console.error('Erro ao se conectar a base de dados:\n', err));

module.exports = connection;