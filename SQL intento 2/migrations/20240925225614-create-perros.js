'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Perros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      raza: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.FLOAT
      },
      tamaño: {
        type: Sequelize.FLOAT
      },
      estadoAdopcion: {
        type: Sequelize.BOOLEAN
      },
      // Esta es la llave foránea que se conecta con otro perro
      idPerro: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Perros',  // Asegúrate de que este es el nombre correcto de la tabla
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('Perros');
  }
};
