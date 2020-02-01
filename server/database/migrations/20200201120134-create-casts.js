'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Casts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      actorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Actors', key: 'id' },
        onUpdate: 'CASCADE', // se a relação muda, aqui tbm vai mudar
        onDelete: 'CASCADE'  // o que acontece com os filmes do diretor deletado
      },
      movieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Movies', key: 'id' },
        onUpdate: 'CASCADE', // se a relação muda, aqui tbm vai mudar
        onDelete: 'CASCADE'  // o que acontece com os filmes do diretor deletado
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
    return queryInterface.dropTable('Casts');
  }
};
