'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaReserva: {
        type: Sequelize.DATE
      },
      fechaDevolucion: {
        type: Sequelize.DATE
      },
      id_auto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'autos', // Nombre de la tabla a la que se hace referencia
          key: 'id' // Clave primaria de la tabla Autos
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clientes', // Nombre de la tabla a la que se hace referencia
          key: 'id' // Clave primaria de la tabla Clientes
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservas');
  }
};