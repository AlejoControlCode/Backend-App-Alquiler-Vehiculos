// Import Sequelize data types
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