const { Model, DataTypes } = require('sequelize');

class Actor extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      bio: {
        type: DataTypes.TEXT
      },
      nationality: {
        type: DataTypes.STRING
      },
      avatar: {
        type: DataTypes.STRING
      },
    }, { sequelize })
  }

  static associate(models) {
    this.belongsToMany(models.Movie, { foreignKey: 'actorId', through: 'Casts', as: 'movies' })
  }
}

module.exports = Actor;