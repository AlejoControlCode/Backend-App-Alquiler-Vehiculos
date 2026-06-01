// Import the Client model used to interact with the clients table
const CLIENTE = require('../Shared/models/Cliente');

<<<<<<< HEAD
// Create a new client
=======
/**
 * ClienteController
 * Contiene las funciones para CRUD de clientes.
 */

// Agrega un nuevo cliente
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const AddClient = async (req, res) => {
    try {

        // Extract client data from request body
        const {
            identification,
            name,
            lastName,
            phone,
            address,
            email,
            registerDate
        } = req.body;

<<<<<<< HEAD
        // Validate required fields
=======

        // Validación básica: campos obligatorios
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        if (!identification || !name || !lastName) {
            return res.status(400).json({
                error: 'All fields are required'
            });
        }

<<<<<<< HEAD
        // Check whether the client already exists
=======

        // Verificar si el cliente ya existe
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        const existingClient = await CLIENTE.findByPk(identification);

        if (existingClient) {
            return res.status(409).json({
                error: 'Client already exists'
            });
        }

<<<<<<< HEAD
        // Create the new client record
=======


        // Crear registro en la base de datos
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        const newClient = await CLIENTE.create({
            identification,
            name,
            lastName,
            phone,
            address,
            email,
            registerDate
        });

        // Return success response
        res.status(201).json({
            message: 'The client was added correctly',
            timestamp: new Date(),
            data: newClient
        });

    } catch (error) {

        // Handle unexpected errors
        console.error('Error adding client:', error);

        res.status(500).json({
            error: 'Error adding client',
            details: error.message
        });
    }
};

<<<<<<< HEAD
// Update an existing client
=======
}


// Edita un cliente existente por su identificación (PK)
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const EditClient = async (req, res) => {
    try {

        // Get client ID from URL parameters
        const { id } = req.params;

        // Extract updated data from request body
        const {
            name,
            lastName,
            phone,
            address,
            email
        } = req.body;

<<<<<<< HEAD
        // Find the client by primary key
=======
        // Buscar el cliente
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        const client = await CLIENTE.findByPk(id);

        // Verify that the client exists
        if (!client) {
            return res.status(404).json({
                error: 'Client not found'
            });
        }

<<<<<<< HEAD
        // Update only provided fields
=======
        // Actualizar campos enviados, mantener valores previos si no vienen
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        await client.update({
            name: name ?? client.name,
            lastName: lastName ?? client.lastName,
            phone: phone ?? client.phone,
            address: address ?? client.address,
            email: email ?? client.email
        });

        // Return success response
        res.status(200).json({
            message: 'The client was edited correctly',
            timestamp: new Date(),
            data: client
        });

    } catch (error) {

        // Handle unexpected errors
        console.error('Error editing client:', error);

        res.status(500).json({
            error: 'Error editing client',
            details: error.message
        });
    }
};

<<<<<<< HEAD
// Retrieve all registered clients
=======
// Obtiene todos los clientes
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const getClients = async (req, res) => {
    try {

        // Fetch all clients from the database
        const clients = await CLIENTE.findAll();

        res.status(200).json({
            message: 'Clients retrieved successfully',
            timestamp: new Date(),
            data: clients
        });

    } catch (error) {

        // Handle unexpected errors
        console.error('Error getting clients:', error);

        res.status(500).json({
            error: 'Error getting clients',
            details: error.message
        });
    }
};

<<<<<<< HEAD
// Delete a client
=======
}


// Elimina un cliente por PK
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const DeleteClient = async (req, res) => {
    try {

        // Get client ID from URL parameters
        const { id } = req.params;

        // Find the client
        const client = await CLIENTE.findByPk(id);

        // Verify that the client exists
        if (!client) {
            return res.status(404).json({
                error: 'Client not exist'
            });
        }

        // Remove the client from the database
        await client.destroy();

        res.status(200).json({
            message: 'The client was deleted correctly',
            timestamp: new Date(),
            data: client
        });

    } catch (error) {

        // Handle unexpected errors
        console.error('Error deleting client:', error);

        res.status(500).json({
            error: 'Error deleting client',
            details: error.message
        });
    }
};

// Export controller functions
module.exports = {
    AddClient,
    EditClient,
    getClients,
    DeleteClient
};