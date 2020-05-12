'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuario', [
      {
        nome: 'David',
        email: 'david@facebook.com',
        senha: bcrypt.hashSync('123456',10)
      },
      {
        nome: 'Paula',
        email: 'paula@ceos.com',
        senha: bcrypt.hashSync('123456',10)
      },
      {
        nome: 'Adler',
        email: 'adler@digitalhouse.com',
        senha: bcrypt.hashSync('123456',10)
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('usuario', null, {});
  }
};
