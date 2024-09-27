'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un Cliente puede tener muchas Reservas
      Clientes.hasMany(models.Reservas, {
        foreignKey: 'id_cliente', // Clave foránea en la tabla Reservas
        as: 'reservas' // Alias para las reservas del cliente
      });
    }
  }
  Clientes.init({
    nombre: DataTypes.STRING,
    correoElectronico: DataTypes.STRING,
    numeroLicencia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clientes',
    tableName: 'clientes'
  });
  return Clientes;
};