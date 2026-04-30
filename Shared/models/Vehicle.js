const { DataTypes } = require('sequelize');
const { sequelize } = require('../../Config/database');

const Vehicle = sequelize.define('Vehicle', {
  IDplate: {type: DataTypes.STRING,primaryKey: true,allowNull: false},
  brand: {type: DataTypes.STRING,allowNull: false },
  model: {type: DataTypes.STRING,allowNull: false},
  mileage: {type: DataTypes.INTEGER,allowNull: false},
  state: {type: DataTypes.STRING,allowNull: false},
  rental_fee: {type: DataTypes.FLOAT,allowNull: false },
  registerDate: {type: DataTypes.DATE,allowNull: false,defaultValue: DataTypes.NOW}
}, {
  tableName: 'vehicles',
  timestamps: false
});

module.exports = Vehicle;