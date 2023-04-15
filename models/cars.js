'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    static associate(models) {
      models.Cars.belongsTo(models.Type_Cars, {
        foreignKey: "id_type",
        as: "type_car",
      });
    }
  }
  Cars.init({
    name_car: DataTypes.STRING,
    rent_cost: DataTypes.INTEGER,
    image_car: DataTypes.STRING,
    id_type: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cars',
  });
  return Cars;
};