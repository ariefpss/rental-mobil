'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: {
        args: true,
        msg: 'Username suda ada di sistem.'
      }

    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email telah digunakan disistem.'
      }
    }, 
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};