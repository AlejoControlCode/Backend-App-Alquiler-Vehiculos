/**
 * Cliente model
 * Representa a los clientes registrados en el sistema.
 * Campos principales:
 * - `identification`: PK (número de identificación)
 * - `name`, `lastName`: nombre y apellido del cliente
 * - `phone`, `address`, `email`: datos de contacto
 * - `registerDate`: fecha de registro
 */
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../Config/database');

const Cliente = sequelize.define('Cliente', {
  identification: {type: DataTypes.INTEGER,primaryKey: true,allowNull: false},
  name: {type: DataTypes.STRING,allowNull: false},
  lastName: {type: DataTypes.STRING,allowNull: false},
  phone: {type: DataTypes.INTEGER,allowNull: true },
  address: {type: DataTypes.STRING,allowNull: true},
  email: {type: DataTypes.STRING,allowNull: true,validate: {isEmail: true}},
  registerDate: {type: DataTypes.DATE,allowNull: false,defaultValue: DataTypes.NOW}
}, {
  tableName: 'clientes',
  timestamps: false 
});

module.exports = Cliente;