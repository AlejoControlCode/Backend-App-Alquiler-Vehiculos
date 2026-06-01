<<<<<<< HEAD
// Import the Vehicle model used to interact with the vehicles table
const VEHICLE = require('../Shared/models/Vehicle');

// Create a new vehicle record
=======

const VEHICLE = require('../Shared/models/Vehicle');

/**
 * VehiclesController
 * CRUD para vehículos: agregar, editar, listar y eliminar.
 */

// Agrega un vehículo nuevo
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const AddVehicle = async (req, res) => {
    try {

        // Extract vehicle data from the request body
        const {
            IDplate,
            brand,
            model,
            mileage,
            state,
            rental_fee,
            registerDate
        } = req.body;

<<<<<<< HEAD
        // Validate required fields
=======
        // Validación básica
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        if (!IDplate || !brand || !model) {
            return res.status(400).json({
                error: 'All fields are required'
            });
        }

<<<<<<< HEAD
        // Check whether a vehicle with the same plate already exists
=======

        // Verificar existencia por PK (placa)
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        const existingVehicle = await VEHICLE.findByPk(IDplate);

        if (existingVehicle) {
            return res.status(409).json({
                error: 'Vehicle already exists'
            });
        }

<<<<<<< HEAD
        // Create a new vehicle record in the database
=======

        // Crear vehículo
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        const newVehicle = await VEHICLE.create({
            IDplate,
            brand,
            model,
            mileage,
            state,
            rental_fee,
            registerDate
        });

        // Return successful creation response
        res.status(201).json({
            message: 'Vehicle added successfully',
            vehicle: newVehicle
        });

    } catch (error) {

        // Handle unexpected errors during vehicle creation
        res.status(500).json({
            message: 'Error adding vehicle',
            error
        });

        console.error('Error adding vehicle:', error);
    }
};

<<<<<<< HEAD
// Retrieve all registered vehicles
=======
// Obtiene todos los vehículos
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const getVehicles = async (req, res) => {
    try {

        // Fetch all vehicles from the database
        const vehicles = await VEHICLE.findAll();

        // Return the list of vehicles
        res.status(200).json(vehicles);

    } catch (error) {

        // Handle unexpected errors during data retrieval
        res.status(500).json({
            message: 'Error fetching vehicles',
            error
        });

        console.error('Error fetching vehicles:', error);
    }
};

<<<<<<< HEAD
// Update an existing vehicle
=======
// Edita un vehículo por su PK (placa)
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const EditVehicle = async (req, res) => {
    try {

        // Get vehicle ID (plate number) from URL parameters
        const { id } = req.params;

        // Extract updated vehicle data from the request body
        const {
            brand,
            model,
            mileage,
            state,
            rental_fee,
            registerDate
        } = req.body;

        // Find the vehicle by primary key
        const vehicle = await VEHICLE.findByPk(id);

        // Verify that the vehicle exists
        if (!vehicle) {
            return res.status(404).json({
                error: 'Vehicle not found'
            });
        }

        // Update vehicle information
        await vehicle.update({
            brand,
            model,
            mileage,
            state,
            rental_fee,
            registerDate
        });

        // Return successful update response
        res.status(200).json({
            message: 'Vehicle updated successfully',
            vehicle
        });

    } catch (error) {

        // Handle unexpected errors during vehicle update
        res.status(500).json({
            message: 'Error updating vehicle',
            error
        });

        console.error('Error updating vehicle:', error);
    }
};

<<<<<<< HEAD
// Delete a vehicle record
=======
// Elimina un vehículo por su PK (placa)
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const DeleteVehicle = async (req, res) => {
    try {

        // Get vehicle ID (plate number) from URL parameters
        const { id } = req.params;

        // Find the vehicle by primary key
        const vehicle = await VEHICLE.findByPk(id);

        // Verify that the vehicle exists
        if (!vehicle) {
            return res.status(404).json({
                error: 'Vehicle not found'
            });
        }

        // Remove the vehicle from the database
        await vehicle.destroy();

        // Return successful deletion response
        res.status(200).json({
            message: 'Vehicle deleted successfully'
        });

    } catch (error) {

        // Handle unexpected errors during vehicle deletion
        res.status(500).json({
            message: 'Error deleting vehicle',
            error
        });

        console.error('Error deleting vehicle:', error);
    }
};

// Export controller functions
module.exports = {
    AddVehicle,
    EditVehicle,
    getVehicles,
    DeleteVehicle
};