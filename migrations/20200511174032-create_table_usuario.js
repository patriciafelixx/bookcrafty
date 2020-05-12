'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable(
      'usuario',
      { 
        id: {
          type: Sequelize.INTEGER,
          alowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        nome: {
          type: Sequelize.STRING(50),
          alowNull: false
        },
        email: {
          type: Sequelize.STRING(50),
          alowNull: false
        },
        senha: {
          type: Sequelize.STRING(256),
          alowNull: false
        }
      });
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.dropTable('usuario');
  }
};
