'use strict';
module.exports = {
  up: (queryInterface, Datatype) => {
    return queryInterface.createTable('todo_lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Datatype.INTEGER.UNSIGNED
      },
      done: {
        allowNull: false,
        defaultValue: false,
        type: Datatype.BOOLEAN
      },
      title: {
        allowNull: false,
        type: Datatype.STRING
      },
      description: {
        allowNull: false,
        type: Datatype.TEXT
      },
      created_at: {
        allowNull: false,
        type: Datatype.DATE
      },
      updated_at: {
        type: Datatype.DATE
      }
    });
  },
  down: (queryInterface, Datatype) => {
    return queryInterface.dropTable('todo_lists');
  }
};