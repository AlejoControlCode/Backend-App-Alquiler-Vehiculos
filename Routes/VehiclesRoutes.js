/**
 * Rutas para vehículos
 * - POST /AgregarVehiculo -> crear vehículo
 * - PUT /EditarVehiculo/:id -> editar vehículo
 * - GET /ObtenerVehiculos -> listar vehículos
 * - DELETE /EliminarVehiculos/:id -> eliminar vehículo
 */
const Express = require('express');
const { AddVehicle, EditVehicle, getVehicles, DeleteVehicle } = require('../Controllers/VehiclesController');

const router = Express.Router();

router.post('/AgregarVehiculo', AddVehicle);
router.put('/EditarVehiculo/:id', EditVehicle);
router.get('/ObtenerVehiculos', getVehicles);
router.delete('/EliminarVehiculos/:id', DeleteVehicle);

module.exports = router;
