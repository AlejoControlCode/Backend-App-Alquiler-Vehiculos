<<<<<<< HEAD
// Import the Express framework
=======
/**
 * Rutas para clientes
 * - POST /AgregarCliente -> crear cliente
 * - PUT /EditarCliente/:id -> editar cliente
 * - GET /ObtenerClientes -> listar clientes
 * - DELETE /EliminarClientes/:id -> eliminar cliente
 */
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const Express = require('express');

// Import client controller functions
const {
    AddClient,
    EditClient,
    getClients,
    DeleteClient
} = require('../Controllers/ClienteController');

// Create a new router instance
const router = Express.Router();

// Route to create a new client
router.post('/AgregarCliente', AddClient);

// Route to update an existing client by ID
router.put('/EditarCliente/:id', EditClient);

// Route to retrieve all clients
router.get('/ObtenerClientes', getClients);

// Route to delete a client by ID
router.delete('/EliminarClientes/:id', DeleteClient);

// Export the router to be used in the main application
module.exports = router;
