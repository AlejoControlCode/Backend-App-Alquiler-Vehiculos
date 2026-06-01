// Import Sequelize data types
const { DataTypes } = require('sequelize');

// Import the configured Sequelize instance
const { sequelize } = require('../../Config/database');

// Define the Client model and its attributes
const Cliente = sequelize.define('Cliente', {

  // Client identification number (Primary Key)
  identification: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },

  // Client first name
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // Client last name
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // Client phone number
  phone: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  // Client address
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },

  // Client email address with email format validation
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },

  // Date when the client was registered
  registerDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }

}, {

  // Database table associated with this model
  tableName: 'clientes',

  // Disable automatic createdAt and updatedAt fields
  timestamps: false

});

// Export the Client model
module.exports = Cliente;