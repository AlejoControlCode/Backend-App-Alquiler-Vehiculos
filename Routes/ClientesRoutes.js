/**
 * Rutas para clientes
 * - POST /AgregarCliente -> crear cliente
 * - PUT /EditarCliente/:id -> editar cliente
 * - GET /ObtenerClientes -> listar clientes
 * - DELETE /EliminarClientes/:id -> eliminar cliente
 */
const Express = require('express');
const { AddClient, EditClient, getClients, DeleteClient } = require('../Controllers/ClienteController');

const router = Express.Router();

router.post('/AgregarCliente', AddClient);
router.put('/EditarCliente/:id', EditClient);
router.get('/ObtenerClientes', getClients);
router.delete('/EliminarClientes/:id', DeleteClient);

module.exports = router;

