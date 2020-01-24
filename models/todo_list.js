'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo_list = sequelize.define('todo_list', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    done: DataTypes.BOOLEAN,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    underscored: true,
  });
  todo_list.associate = function(models) {
    // associations can be defined here
  };
  return todo_list;
};