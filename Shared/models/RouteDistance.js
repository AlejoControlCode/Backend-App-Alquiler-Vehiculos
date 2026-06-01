/**
 * RouteDistance model
 * Representa una ruta asociada a una renta y guarda los kilómetros del trayecto.
 */
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../Config/database');

const RouteDistance = sequelize.define('RouteDistance', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rent_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'rents',
      key: 'id_rent'
    }
  },
  origin: { type: DataTypes.STRING, allowNull: false },
  destination: { type: DataTypes.STRING, allowNull: false },
  distance_km: { type: DataTypes.FLOAT, allowNull: false }
}, {
  tableName: 'RouteDistance',
  timestamps: false
});

module.exports = RouteDistance;
