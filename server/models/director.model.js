const { Model, DataTypes } = require('sequelize');

class Director extends Model {
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
    this.hasMany(models.Movie, { foreignKey: 'directorId', as: 'movies' });
  }
}

module.exports = Director;