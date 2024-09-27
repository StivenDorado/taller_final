'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Una Reserva pertenece a un Auto
      Reservas.belongsTo(models.Autos, {
        foreignKey: 'id_auto', // Clave foránea que apunta a Autos
        as: 'auto' // Alias para acceder al auto desde una reserva
      });

      // Una Reserva pertenece a un Cliente
      Reservas.belongsTo(models.Clientes, {
        foreignKey: 'id_cliente', // Clave foránea que apunta a Clientes
        as: 'cliente' // Alias para acceder al cliente desde una reserva
      });
    }
  }

  Reservas.init({
    fechaReserva: DataTypes.DATE,
    fechaDevolucion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reservas',
    tableName: 'reservas'
  });
  return Reservas;
};