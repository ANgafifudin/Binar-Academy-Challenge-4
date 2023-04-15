'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type_Cars extends Model {
    static associate(models) {
      models.Type_Cars.hasMany(models.Cars, {
        foreignKey: "id_type",
        as: "cars",
      });
    }
  }
  Type_Cars.init({
    type_car: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type_Cars',
  });
  return Type_Cars;
};