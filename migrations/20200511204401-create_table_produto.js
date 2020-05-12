'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produto', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      descricao: Sequelize.STRING(300),
      preco: Sequelize.FLOAT,
      fk_categoria: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categoria',
          key: 'id_categoria'
        }
      },
      imagem: Sequelize.STRING(500),
      fk_editora: {
        type: Sequelize.INTEGER,
        references: {
          model: 'editora',
          key: 'id'
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('produto');
  }
};
