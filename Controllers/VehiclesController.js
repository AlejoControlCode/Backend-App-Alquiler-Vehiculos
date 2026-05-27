
const VEHICLE = require('../Shared/models/Vehicle');

/**
 * VehiclesController
 * CRUD para vehículos: agregar, editar, listar y eliminar.
 */

// Agrega un vehículo nuevo
const AddVehicle = async (req, res) => {
    try {
        const {
            IDplate,
            brand,
            model,
            mileage,
            state,
            rental_fee,
            registerDate


        } = req.body;

        // Validación básica
        if (!IDplate || !brand || !model) {
            return res.status(400).json({ error: 'All fields are required' });
        }


        // Verificar existencia por PK (placa)
        const existingVehicle = await VEHICLE.findByPk(IDplate);
        if (existingVehicle) {
            return res.status(409).json({
                error: 'Vehicle already exists'
            });
        }


        // Crear vehículo
        const newVehicle = await VEHICLE.create({
            IDplate,
            brand,
            model,
            mileage,
            state,
            rental_fee,
            registerDate
        })

        res.status(201).json({ message: 'Vehicle added successfully', vehicle: newVehicle });

    } catch (error) {
        res.status(500).json({ message: 'Error adding vehicle', error });
        console.error('Error adding vehicle:', error);
    }
}


// Obtiene todos los vehículos
const getVehicles = async (req, res) => {
    try {
        const vehicles = await VEHICLE.findAll();

        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching vehicles', error });
        console.error('Error fetching vehicles:', error);
    }
}

// Edita un vehículo por su PK (placa)
const EditVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            brand,
            model,
            mileage,
            state,
            rental_fee,
            registerDate
        } = req.body;

        const vehicle = await VEHICLE.findByPk(id);
        if (!vehicle) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }

        await vehicle.update({
            brand,
            model,
            mileage,
            state,
            rental_fee,
            registerDate
        });

        res.status(200).json({ message: 'Vehicle updated successfully', vehicle });
    } catch (error) {
        res.status(500).json({ message: 'Error updating vehicle', error });
        console.error('Error updating vehicle:', error);
    }
}


// Elimina un vehículo por su PK (placa)
const DeleteVehicle = async (req, res) => {
    try {
        const { id } = req.params;

        const vehicle = await VEHICLE.findByPk(id);

        if (!vehicle) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }

        await vehicle.destroy();

        res.status(200).json({ message: 'Vehicle deleted successfully' });
        
    } catch (error) {
        res.status(500).json({ message: 'Error deleting vehicle', error });
        console.error('Error deleting vehicle:', error);
    }
}

module.exports = {
    AddVehicle,
    EditVehicle,
    getVehicles,
    DeleteVehicle
}