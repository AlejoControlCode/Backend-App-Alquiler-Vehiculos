const CLIENTE = require('../Shared/models/Cliente');

/**
 * ClienteController
 * Contiene las funciones para CRUD de clientes.
 */

// Agrega un nuevo cliente
const AddClient = async (req, res) => {
    try {
        const {
            identification,
            name,
            lastName,
            phone,
            address,
            email,
            registerDate
        } = req.body;


        // Validación básica: campos obligatorios
        if (!identification || !name || !lastName) {
            return res.status(400).json({ error: 'All fields are required' });
        }


        // Verificar si el cliente ya existe
        const existingClient = await CLIENTE.findByPk(identification);
        if (existingClient) {
            return res.status(409).json({
                error: 'Client already exists'
            });
        }



        // Crear registro en la base de datos
        const newClient = await CLIENTE.create({
            identification,
            name,
            lastName,
            phone,
            address,
            email,
            registerDate

        })

        res.status(201).json({
            message: 'The client was added correctly',
            timestamp: new Date(),
            data: newClient
        })

    } catch (error) {
        console.error('Error adding client:', error);
        res.status(500).json({ error: 'Error adding client', details: error.message });
    }

}


// Edita un cliente existente por su identificación (PK)
const EditClient = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            name,
            lastName,
            phone,
            address,
            email,
        } = req.body;

        // Buscar el cliente
        const client = await CLIENTE.findByPk(id);

        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }

        // Actualizar campos enviados, mantener valores previos si no vienen
        await client.update({
            name: name ?? client.name,
            lastName: lastName ?? client.lastName,
            phone: phone ?? client.phone,
            address: address ?? client.address,
            email: email ?? client.email
        });

        res.status(200).json({
            message: 'The client was edited correctly',
            timestamp: new Date(),
            data: client
        });

    } catch (error) {
        console.error('Error editing client:', error)
        res.status(500).json({ error: 'Error editing client', details: error.message })
    }
}


// Obtiene todos los clientes
const getClients = async (req, res) => {
    try {

        const clients = await CLIENTE.findAll();

        res.status(200).json({
            message: 'Clients retrieved successfully',
            timestamp: new Date(),
            data: clients
        });

    } catch (error) {
        console.error('Error getting clients:', error);
        res.status(500).json({ error: 'Error getting clients', details: error.message });
    }

}


// Elimina un cliente por PK
const DeleteClient = async (req, res) => {

    try{

        const { id } = req.params; 

        const client = await CLIENTE.findByPk(id);

        if (!client) {
            return res.status(404).json({ error: 'Client not exist' });
        }

        await client.destroy();

        res.status(200).json({
            message: 'The client was deleted correctly',
            timestamp: new Date(),
            data: client
        });


    }catch(error){
        console.error('Error deleting client:', error);
        res.status(500).json({ error: 'Error deleting client', details: error.message });
    }
}

module.exports = {
    AddClient,
    EditClient,
    getClients,
    DeleteClient
}