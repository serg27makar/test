'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  User.login = function(loginUser) {

  };
  return User;
};
