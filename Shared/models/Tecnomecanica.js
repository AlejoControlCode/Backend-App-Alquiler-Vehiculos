<<<<<<< HEAD
// Import Sequelize data types
=======
/**
 * Tecnomecanica model
 * Registra las solicitudes de tecnomecánica/mantenimiento para vehículos.
 * Campos principales:
 * - `idTecnomecanica`: PK auto incremental
 * - `ordenServicio`: número de orden de servicio
 * - `plate_fk`: FK a la placa del vehículo
 * - `nombreTecnico`, `fechaMantenimiento`, `estado`: detalles del mantenimiento
 */
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const { DataTypes } = require('sequelize');

// Import the configured Sequelize instance
const { sequelize } = require('../../Config/database');

// Define the Tecnomecanica model and its attributes
const Tecnomecanica = sequelize.define('Tecnomecanica', {

    // Unique inspection record identifier (Primary Key)
    idTecnomecanica: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    // Service order number associated with the inspection
    ordenServicio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    // Date when the inspection or maintenance request was submitted
    fechaSolicitud: {
        type: DataTypes.DATE,
        allowNull: false
    },

    // Foreign key referencing the vehicle associated with the inspection
    plate_fk: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'vehicles',
            key: 'IDplate'
        }
    },

    // Name of the technician responsible for the inspection
    nombreTecnico: {
        type: DataTypes.STRING,
        allowNull: false
    },

    // Date when the maintenance or inspection was performed
    fechaMantenimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },

    // Current inspection or maintenance status
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

// Export the Tecnomecanica model
module.exports = Tecnomecanica;