'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('item_pedido', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      fk_pedido: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pedido',
          key: 'id'
        }
      },
      fk_produto: {
        type: Sequelize.INTEGER,
        references: {
          model: 'produto',
          key: 'id'
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('item_pedido');
  }
};
