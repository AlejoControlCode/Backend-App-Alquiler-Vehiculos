/**
 * Rent model
 * Representa una renta de vehículo.
 * Campos principales:
 * - `id_rent`: PK auto incremental
 * - `identification_fk`: FK al cliente (clientes.identification)
 * - `plate_fk`: FK al vehículo (vehicles.IDplate)
 * - `start_date`, `end_date`: fechas de inicio y fin de la renta
 * - `total_price`: precio total de la renta
 * - `rental_status`: estado (active|finished|cancelled)
 * - `client_comment`, `company_comment`, `employee_comment`: comentarios opcionales
 */
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../Config/database');

const Rent = sequelize.define('Rent', {
  id_rent: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
  identification_fk: {type: DataTypes.INTEGER,allowNull: false,
    references: {
      model: 'clientes', 
      key: 'identification'
    }
  },
  plate_fk: {type: DataTypes.STRING,allowNull: false,
    references: {
      model: 'vehicles',
      key: 'IDplate'
    }
  },
  start_date: {type: DataTypes.DATE,allowNull: false},
  end_date: {type: DataTypes.DATE,allowNull: false},
  total_price: {type: DataTypes.FLOAT,allowNull: false},
  rental_status: {type: DataTypes.ENUM('active', 'finished', 'cancelled'),allowNull: false},
  client_comment: {type: DataTypes.TEXT},
  company_comment: {type: DataTypes.TEXT},
  employee_comment: {type: DataTypes.TEXT}

}, {
  tableName: 'rents',
  timestamps: false
});

module.exports = Rent;