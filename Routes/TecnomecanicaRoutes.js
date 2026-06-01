<<<<<<< HEAD
// Import the Express framework
=======
/**
 * Rutas para tecnomecanica
 * - POST /AgregarTecnomecanica -> crear solicitud
 * - GET /ObtenerTecnomecanica/:plate_fk -> obtener por placa
 */
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const Express = require('express');

// Import tecnomecanica controller functions
const {
    AddTecnomecanica,
    getTecnomecanica
} = require('../Controllers/TecnomecanicaController');

// Create a new router instance
const router = Express.Router();

// Route to create a new tecnomecanica record
router.post('/AgregarTecnomecanica', AddTecnomecanica);

// Route to retrieve tecnomecanica information for a specific vehicle
router.get('/ObtenerTecnomecanica/:plate_fk', getTecnomecanica);

// Export the router to be used in the main application
module.exports = router;
