'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Autos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      año: {
        type: Sequelize.INTEGER,
        allowNull: false 
      },
      disponibilidad: {
        type: Sequelize.BOOLEAN,
        defaultValue: true 
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
    await queryInterface.dropTable('Autos');
  }
};
