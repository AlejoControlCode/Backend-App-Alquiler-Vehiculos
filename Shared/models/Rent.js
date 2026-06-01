// Import Sequelize data types
const { DataTypes } = require('sequelize');

// Import the configured Sequelize instance
const { sequelize } = require('../../Config/database');

// Define the Rent model and its attributes
const Rent = sequelize.define('Rent', {

  // Unique rental identifier (Primary Key)
  id_rent: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  // Foreign key referencing the client who rents the vehicle
  identification_fk: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'clientes',
      key: 'identification'
    }
  },

  // Foreign key referencing the rented vehicle
  plate_fk: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'vehicles',
      key: 'IDplate'
    }
  },

  // Rental start date
  start_date: {
    type: DataTypes.DATE,
    allowNull: false
  },

  // Rental end date
  end_date: {
    type: DataTypes.DATE,
    allowNull: false
  },

  // Total rental cost
  total_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  // Current rental status
  rental_status: {
    type: DataTypes.ENUM('active', 'finished', 'cancelled'),
    allowNull: false
  },

  // Client feedback or comments about the rental
  client_comment: {
    type: DataTypes.TEXT
  },

  // Company or employee comments regarding the rental
  company_comment: {
    type: DataTypes.TEXT
  }

}, {

  // Database table associated with this model
  tableName: 'rents',

  // Disable automatic createdAt and updatedAt fields
  timestamps: false

});

// Export the Rent model
module.exports = Rent;