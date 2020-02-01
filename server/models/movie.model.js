const { Model, DataTypes } = require('sequelize');

class Movie extends Model {
  static init(connection) {
    super.init({
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      desc: {
        type: DataTypes.TEXT
      },
      poster: {
        type: DataTypes.STRING
      },
      genre: {
        type: DataTypes.ENUM(['Ação', 'Animação', 'Aventura']),
        defaultValue: 'Ação'
      },
      releaseDate: {
        type: DataTypes.DATE
      },
      runtime: {
        type: DataTypes.INTEGER
      },
      inTheater: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
    }, { sequelize: connection })
  }

  static associate(models) {
    this.belongsTo(models.Director, { foreignKey: 'directorId', as: 'director' });
    this.belongsToMany(models.Actor, { foreignKey: 'movieId', through: 'Casts', as: 'actors' });
  }
}

module.exports = Movie;
