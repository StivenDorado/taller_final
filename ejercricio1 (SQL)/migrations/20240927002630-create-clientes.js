'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      correoElectronico: { 
        type: Sequelize.STRING,
        allowNull: false, 
        unique: true 
      },
      numeroLicencia: {
        type: Sequelize.STRING,
        allowNull: false, 
        unique: true 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW') 
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW') 
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clientes');
  }
};
