// Import the Tecnomecanica model used to interact with the inspection records table
const TECNOMECANICA = require('../Shared/models/Tecnomecanica');

<<<<<<< HEAD
// Create a new tecnomecanica record
=======
/**
 * TecnomecanicaController
 * Añade y consulta solicitudes de tecnomecánica para vehículos.
 */

// Agrega una nueva solicitud de tecnomecanica
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const AddTecnomecanica = async (req, res) => {
    try {

        // Extract inspection data from the request body
        const {
            ordenServicio,
            fechaSolicitud,
            plate_fk,
            nombreTecnico,
            fechaMantenimiento,
            estado
        } = req.body;

<<<<<<< HEAD
        // Validate required fields
=======
        // Validación básica de campos requeridos
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        if (!ordenServicio || !plate_fk || !estado) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        // Check whether a record with the same service order already exists
        const existingTecnomecanica = await TECNOMECANICA.findOne({
            where: { ordenServicio }
        });

        if (existingTecnomecanica) {
            return res.status(409).json({
                message: 'Tecnomecanica already exists'
            });
        }

<<<<<<< HEAD
        // Create a new tecnomecanica record in the database
=======
        // Crear registro
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        const newTecnomecanica = await TECNOMECANICA.create({
            ordenServicio,
            fechaSolicitud,
            plate_fk,
            nombreTecnico,
            fechaMantenimiento,
            estado
        });

        // Return successful creation response
        res.status(201).json({
            message: 'The tecnomecanica was added correctly',
            timestamp: new Date(),
            data: newTecnomecanica
        });

    } catch (error) {

        // Handle unexpected errors during record creation
        console.log('Error adding tecnomecanica:', error);

        res.status(500).json({
            message: 'Error adding tecnomecanica'
        });
    }
};

<<<<<<< HEAD
// Retrieve tecnomecanica information for a specific vehicle
=======
// Obtiene la tecnomecánica por placa (si existe)
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const getTecnomecanica = async (req, res) => {
    try {

        // Get vehicle plate number from URL parameters
        const { plate_fk } = req.params;

        // Search for the tecnomecanica record associated with the vehicle
        const tecnomecanica = await TECNOMECANICA.findOne({
            where: { plate_fk }
        });

        // Verify that the record exists
        if (!tecnomecanica) {
            return res.status(404).json({
                message: 'Tecnomecanica not found'
            });
        }

        // Return the requested tecnomecanica information
        res.status(200).json({
            message: 'Tecnomecanica retrieved successfully',
            timestamp: new Date(),
            data: tecnomecanica
        });

    } catch (error) {

        // Handle unexpected errors during data retrieval
        console.log('Error getting tecnomecanica:', error);

        res.status(500).json({
            message: 'Error getting tecnomecanica'
        });
    }
};

// Export controller functions
module.exports = {
    AddTecnomecanica,
    getTecnomecanica
};


