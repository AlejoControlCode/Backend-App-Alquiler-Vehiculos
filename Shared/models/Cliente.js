<<<<<<< HEAD
// Import Sequelize data types
=======
/**
 * Cliente model
 * Representa a los clientes registrados en el sistema.
 * Campos principales:
 * - `identification`: PK (número de identificación)
 * - `name`, `lastName`: nombre y apellido del cliente
 * - `phone`, `address`, `email`: datos de contacto
 * - `registerDate`: fecha de registro
 */
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
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