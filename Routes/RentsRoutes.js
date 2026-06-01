<<<<<<< HEAD
// Import the Express framework
const Express = require('express');

// Import rental controller functions
const {
    AddRent,
    getRentHistoryByClient,
    getRentHistoryByPlate,
    updateComments
} = require('../Controllers/RentController');
=======
/**
 * Rutas para rentas
 * - POST /AddRent -> crear una renta
 * - POST /CreateWithRoute -> crear una renta con ruta y kilómetros
 * - GET /History/Client/:identification -> historial por cliente
 * - GET /History/Vehicle/:plate -> historial por vehículo
 * - PUT /UpdateComments/:id -> actualizar comentarios de una renta
 * - PUT /UpdateStatus/:id -> actualizar estado de una renta
 */
const Express = require('express');

const {AddRent, AddRentWithRoute, getRentHistoryByClient, getRentHistoryByPlate, updateComments, updateStatus} = require('../Controllers/RentsController');
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3

// Create a new router instance
const router = Express.Router();

// Route to create a new rental record
router.post('/AddRent', AddRent);
<<<<<<< HEAD
=======
router.post('/CreateWithRoute', AddRentWithRoute);
router.get('/History/Client/:identification', getRentHistoryByClient);
router.get('/History/Vehicle/:plate', getRentHistoryByPlate);
router.put('/UpdateComments/:id', updateComments);
router.put('/UpdateStatus/:id', updateStatus);
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3

// Route to retrieve rental history for a specific client
router.get('/History/Client/:identification', getRentHistoryByClient);

// Route to retrieve rental history for a specific vehicle
router.get('/History/Vehicle/:plate', getRentHistoryByPlate);

// Route to update client and employee comments for a rental
router.put('/UpdateComments/:id', updateComments);

// Export the router to be used in the main application
module.exports = router;