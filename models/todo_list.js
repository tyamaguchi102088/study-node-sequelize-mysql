'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo_list = sequelize.define('todo_list', {
    id: DataTypes.INTEGER,
    is_done: DataTypes.BOOLEAN,
    todo: DataTypes.TEXT
  }, {
    underscored: true,
  });
  todo_list.associate = function(models) {
    // associations can be defined here
  };
  return todo_list;
};