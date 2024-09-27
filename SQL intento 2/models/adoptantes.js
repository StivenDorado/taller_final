'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adoptantes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Adoptantes.hasMany(models.Perro, {
        foreignKey: 'adoptanteId', // Cambia esto si la columna en la tabla Perros es diferente
        as: 'perros', // Usar 'perros' si estás asociando múltiples perros a un adoptante
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL' // Asegúrate de que esto se ajuste a tus necesidades
      });
    },
  Adoptantes.init({
    nombre: DataTypes.STRING,
    correoElectrónico: DataTypes.STRING,
    dirección: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Adoptantes',
    tableName: 'adoptante'
  });
  return Adoptantes;
};