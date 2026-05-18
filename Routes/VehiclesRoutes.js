const Express = require('express');
const { AddVehicle, EditVehicle, getVehicles, DeleteVehicle } = require('../Controllers/VehiclesController');

const router = Express.Router();

router.post('/AgregarVehiculo', AddVehicle);
router.put('/EditarVehiculo/:id', EditVehicle);
router.get('/ObtenerVehiculos', getVehicles);
router.delete('/EliminarVehiculos/:id', DeleteVehicle);

module.exports = router;
