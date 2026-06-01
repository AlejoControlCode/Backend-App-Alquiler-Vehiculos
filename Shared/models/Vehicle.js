// Import Sequelize data types
const { DataTypes } = require('sequelize');

// Import the configured Sequelize instance
const { sequelize } = require('../../Config/database');

// Define the Vehicle model and its attributes
const Vehicle = sequelize.define('Vehicle', {

  // Vehicle license plate (Primary Key)
  IDplate: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },

  // Vehicle brand or manufacturer
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // Vehicle model
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // Current vehicle mileage
  mileage: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  // Current vehicle status or condition
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // Rental price charged for the vehicle
  rental_fee: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  // Date when the vehicle was registered in the system
  registerDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }

}, {

  // Database table associated with this model
  tableName: 'vehicles',

  // Disable automatic createdAt and updatedAt fields
  timestamps: false

});

// Export the Vehicle model
module.exports = Vehicle;