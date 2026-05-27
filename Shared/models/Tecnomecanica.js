/**
 * Tecnomecanica model
 * Registra las solicitudes de tecnomecánica/mantenimiento para vehículos.
 * Campos principales:
 * - `idTecnomecanica`: PK auto incremental
 * - `ordenServicio`: número de orden de servicio
 * - `plate_fk`: FK a la placa del vehículo
 * - `nombreTecnico`, `fechaMantenimiento`, `estado`: detalles del mantenimiento
 */
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../Config/database');

const Tecnomecanica = sequelize.define('Tecnomecanica', {
    idTecnomecanica: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    ordenServicio: {type: DataTypes.INTEGER,allowNull: false},
    fechaSolicitud: {type: DataTypes.DATE,allowNull: false},
    plate_fk: {type: DataTypes.STRING,allowNull: false,
    references: {
      model: 'vehicles',
      key: 'IDplate'
    }},
    nombreTecnico: {type: DataTypes.STRING,allowNull: false},
    fechaMantenimiento: {type: DataTypes.DATE,allowNull: false},
    estado: {type: DataTypes.STRING,allowNull: false}
    
});

module.exports = Tecnomecanica;