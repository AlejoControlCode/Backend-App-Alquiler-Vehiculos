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

const router = Express.Router();

router.post('/AddRent', AddRent);
router.post('/CreateWithRoute', AddRentWithRoute);
router.get('/History/Client/:identification', getRentHistoryByClient);
router.get('/History/Vehicle/:plate', getRentHistoryByPlate);
router.put('/UpdateComments/:id', updateComments);
router.put('/UpdateStatus/:id', updateStatus);

module.exports = router;