<<<<<<< HEAD
// Create a new rental record
=======
const RENT = require('../Shared/models/Rent');
const ROUTE_DISTANCE = require('../Shared/models/RouteDistance');
const { sequelize } = require('../Config/database');

const normalizeRentalStatus = (status) => {
    const statusMap = {
        Pendiente: 'active',
        Activa: 'active',
        Finalizada: 'finished',
        Cancelada: 'cancelled',
        active: 'active',
        finished: 'finished',
        cancelled: 'cancelled',
    };

    return statusMap[status?.trim()] ?? status;
};

// Crea una nueva renta
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const AddRent = async (req, res) => {

    try {

<<<<<<< HEAD
        // Extract rental data from the request body
=======
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        const {
            identification_fk,
            plate_fk,
            start_date,
            end_date,
            total_price,
            rental_status,
            client_comment,
            company_comment
        } = req.body;

<<<<<<< HEAD
        // Validate required fields
=======
        // Validación de campos obligatorios
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        if (
            !identification_fk ||
            !plate_fk ||
            !start_date ||
            !end_date ||
            !total_price ||
            !rental_status
        ) {

            return res.status(400).json({
                message: 'All fields are required'
            });

        }

<<<<<<< HEAD
        // Create a new rental in the database
=======
        // Crear renta en la base de datos
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        const newRent = await RENT.create({

            identification_fk,
            plate_fk,
            start_date,
            end_date,
            total_price,
<<<<<<< HEAD
            rental_status,
=======
            rental_status: normalizeRentalStatus(rental_status),
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
            client_comment,
            company_comment

        });

<<<<<<< HEAD
        // Return a successful creation response
=======
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        res.status(201).json({

            message: 'Rent created successfully',
            timestamp: new Date(),
            data: newRent

        });

    } catch(error) {

<<<<<<< HEAD
        // Handle unexpected errors during rental creation
=======
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        console.log('Error adding rent:', error);

        res.status(500).json({
            message: 'Error adding rent'
        });

    }

}

<<<<<<< HEAD
// Retrieve rental history for a specific client
=======

// Crea una renta junto con la ruta y los kilómetros calculados
const AddRentWithRoute = async (req, res) => {
    const transaction = await sequelize.transaction();

    try {
        const { rent, route } = req.body;
        const {
            identification_fk,
            plate_fk,
            start_date,
            end_date,
            total_price,
            rental_status,
            client_comment,
            company_comment
        } = rent || {};

        const { origin, destination, distance_km } = route || {};
        const parsedDistance = Number(distance_km);

        if (
            !identification_fk ||
            !plate_fk ||
            !start_date ||
            !end_date ||
            !total_price ||
            !rental_status ||
            typeof origin !== 'string' ||
            !origin.trim() ||
            typeof destination !== 'string' ||
            !destination.trim() ||
            Number.isNaN(parsedDistance) ||
            parsedDistance <= 0
        ) {
            await transaction.rollback();
            return res.status(400).json({
                message: 'All fields are required including valid origin, destination and distance_km'
            });
        }

        const newRent = await RENT.create({
            identification_fk,
            plate_fk,
            start_date,
            end_date,
            total_price,
            rental_status: normalizeRentalStatus(rental_status),
            client_comment,
            company_comment
        }, { transaction });

        const newRoute = await ROUTE_DISTANCE.create({
            rent_id: newRent.id_rent,
            origin: origin.trim(),
            destination: destination.trim(),
            distance_km: parsedDistance
        }, { transaction });

        await transaction.commit();

        res.status(201).json({
            message: 'Rent with route created successfully',
            timestamp: new Date(),
            data: {
                rent: newRent,
                route: newRoute
            }
        });

    } catch(error) {
        await transaction.rollback();
        console.log('Error adding rent with route:', error);
        res.status(500).json({
            message: 'Error adding rent with route'
        });
    }
}

// Historial de rentas por cliente
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const getRentHistoryByClient = async (req, res) => {

    try {

<<<<<<< HEAD
        // Get client identification from URL parameters
        const { identification } = req.params;

        // Retrieve all rentals associated with the client
=======
        const { identification } = req.params;

>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        const history = await RENT.findAll({

            where: {
                identification_fk: identification
            },

<<<<<<< HEAD
            // Sort results by rental start date (most recent first)
=======
            include: [
                {
                    model: ROUTE_DISTANCE,
                    required: false
                }
            ],

>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
            order: [
                ['start_date', 'DESC']
            ]

        });

<<<<<<< HEAD
        // Check whether rental history exists
=======
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        if(history.length === 0){

            return res.status(404).json({
                message: 'No rent history found'
            });

        }

<<<<<<< HEAD
        // Return rental history
=======
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        res.status(200).json({

            message: 'Rent history retrieved successfully',
            timestamp: new Date(),
            data: history

        });

    } catch(error){

<<<<<<< HEAD
        // Handle unexpected errors while retrieving rental history
=======
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        console.log('Error getting rent history:', error);

        res.status(500).json({
            message: 'Error getting rent history'
        });

    }

}

<<<<<<< HEAD
// Retrieve rental history for a specific vehicle
=======
// Historial de rentas por vehículo
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const getRentHistoryByPlate = async (req, res) => {

    try {

<<<<<<< HEAD
        // Get vehicle plate number from URL parameters
        const { plate } = req.params;

        // Retrieve all rentals associated with the vehicle
=======
        const { plate } = req.params;

>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        const history = await RENT.findAll({

            where: {
                plate_fk: plate
            },

<<<<<<< HEAD
            // Sort results by rental start date (most recent first)
=======
            include: [
                {
                    model: ROUTE_DISTANCE,
                    required: false
                }
            ],

>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
            order: [
                ['start_date', 'DESC']
            ]

        });

<<<<<<< HEAD
        // Check whether rental history exists
=======
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        if(history.length === 0){

            return res.status(404).json({
                message: 'No vehicle history found'
            });

        }

<<<<<<< HEAD
        // Return vehicle rental history
=======
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        res.status(200).json({

            message: 'Vehicle history retrieved successfully',
            timestamp: new Date(),
            data: history

        });

    } catch(error){

<<<<<<< HEAD
        // Handle unexpected errors while retrieving vehicle history
=======
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        console.log('Error getting vehicle history:', error);

        res.status(500).json({
            message: 'Error getting vehicle history'
        });

    }

}
<<<<<<< HEAD

// Update client and employee comments for a rental
=======
// Actualiza comentarios de cliente y empleado/empresa en una renta
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const updateComments = async (req, res) => {

    try {

<<<<<<< HEAD
        // Get rental ID from URL parameters
        const { id } = req.params;

        // Extract comments from request body
        const {
            client_comment,
            employee_comment
        } = req.body;

        // Find the rental record by primary key
        const rent = await RENT.findByPk(id);

        // Verify that the rental exists
=======
        const { id } = req.params;

        const {
            client_comment,
            employee_comment,
            company_comment
        } = req.body;

        const rent = await RENT.findByPk(id);

>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        if(!rent){

            return res.status(404).json({
                message: 'Rent not found'
            });

        }

<<<<<<< HEAD
        // Update rental comments
        await rent.update({

            client_comment,
            employee_comment

        });

        // Return successful update response
=======
        await rent.update({
            client_comment,
            employee_comment,
            company_comment: company_comment ?? employee_comment
        });

>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        res.status(200).json({

            message: 'Comments updated successfully',
            data: rent

        });

    } catch(error){

<<<<<<< HEAD
        // Handle unexpected errors during comment update
=======
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
        console.log('Error updating comments:', error);

        res.status(500).json({
            message: 'Error updating comments'
        });

    }

}

<<<<<<< HEAD
// Export controller functions
module.exports = {

    AddRent,
    getRentHistoryByClient,
    getRentHistoryByPlate,
    updateComments

=======
const updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { rental_status } = req.body;

        if (!rental_status) {
            return res.status(400).json({
                message: 'rental_status is required'
            });
        }

        const rent = await RENT.findByPk(id);
        if (!rent) {
            return res.status(404).json({
                message: 'Rent not found'
            });
        }

        await rent.update({ rental_status: normalizeRentalStatus(rental_status) });

        res.status(200).json({
            message: 'Rent status updated successfully',
            data: rent
        });
    } catch (error) {
        console.log('Error updating rent status:', error);
        res.status(500).json({
            message: 'Error updating rent status'
        });
    }
}

const UpdateEstadoRenta = async (id, newStatus) => {
    try {
        const rent = await RENT.findByPk(id);
        if (!rent) {
            console.log(`Rent with id ${id} not found`);
            return false;
        }
        await rent.update({ rental_status: normalizeRentalStatus(newStatus) });
        console.log(`Rent with id ${id} updated to status ${newStatus}`);
        return true;
    } catch (error) {
        console.log('Error updating rent status:', error);
        return false;
    }
}

module.exports = {
    AddRent,
    AddRentWithRoute,
    getRentHistoryByClient,
    getRentHistoryByPlate,
    updateComments,
    updateStatus
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
}