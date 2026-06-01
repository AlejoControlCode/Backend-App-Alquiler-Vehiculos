// Import the Express framework
const Express = require('express');

// Import vehicle controller functions
const {
    AddVehicle,
    EditVehicle,
    getVehicles,
    DeleteVehicle
} = require('../Controllers/VehiclesController');

// Create a new router instance
const router = Express.Router();

// Route to create a new vehicle record
router.post('/AgregarVehiculo', AddVehicle);

// Route to update an existing vehicle by ID
router.put('/EditarVehiculo/:id', EditVehicle);

// Route to retrieve all registered vehicles
router.get('/ObtenerVehiculos', getVehicles);

// Route to delete a vehicle by ID
router.delete('/EliminarVehiculos/:id', DeleteVehicle);

// Export the router to be used in the main application
module.exports = router;
