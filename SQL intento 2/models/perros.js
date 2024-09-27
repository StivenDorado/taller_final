'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Perros.belongsTo(models.adoptantes)
    }
  }
  Perros.init({
    nombre: DataTypes.STRING,
    raza: DataTypes.STRING,
    edad: DataTypes.FLOAT,
    tamaño: DataTypes.FLOAT,
    estadoAdopcion: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Perros',
    tableName: 'perro'
  });
  return Perros;
};