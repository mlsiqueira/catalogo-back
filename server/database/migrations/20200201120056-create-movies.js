'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      directorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Directors', key: 'id' },
        onUpdate: 'CASCADE', // se a relação muda, aqui tbm vai mudar
        onDelete: 'RESTRICT' // o que acontece com os filmes do diretor deletado
      },
      desc: {
        type: Sequelize.TEXT
      },
      poster: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.ENUM(['Ação', 'Animação', 'Aventura']),
        allowNull: false
      },
      releaseDate: {
        type: Sequelize.DATE
      },
      runtime: {
        type: Sequelize.INTEGER
      },
      inTheater: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};
