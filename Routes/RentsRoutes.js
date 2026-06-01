// Import the Express framework
const Express = require('express');

// Import rental controller functions
const {
    AddRent,
    getRentHistoryByClient,
    getRentHistoryByPlate,
    updateComments
} = require('../Controllers/RentController');

// Create a new router instance
const router = Express.Router();

// Route to create a new rental record
router.post('/AddRent', AddRent);

// Route to retrieve rental history for a specific client
router.get('/History/Client/:identification', getRentHistoryByClient);

// Route to retrieve rental history for a specific vehicle
router.get('/History/Vehicle/:plate', getRentHistoryByPlate);

// Route to update client and employee comments for a rental
router.put('/UpdateComments/:id', updateComments);

// Export the router to be used in the main application
module.exports = router;