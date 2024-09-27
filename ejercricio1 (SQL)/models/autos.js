'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un Auto puede tener muchas Reservas
      Autos.hasMany(models.Reservas, {
        foreignKey: 'id_auto', // Clave foránea que estará en la tabla Reservas
        as: 'reservas' // Alias para acceder a las reservas de un auto
      });
    }
  }
  Autos.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    año: DataTypes.INTEGER,
    disponibilidad: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Autos',
    tableName: 'autos'
  });
  return Autos;
};