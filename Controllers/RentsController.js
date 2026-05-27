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
const AddRent = async (req, res) => {

    try {

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

        // Validación de campos obligatorios
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

        // Crear renta en la base de datos
        const newRent = await RENT.create({

            identification_fk,
            plate_fk,
            start_date,
            end_date,
            total_price,
            rental_status: normalizeRentalStatus(rental_status),
            client_comment,
            company_comment

        });

        res.status(201).json({

            message: 'Rent created successfully',
            timestamp: new Date(),
            data: newRent

        });

    } catch(error) {

        console.log('Error adding rent:', error);

        res.status(500).json({
            message: 'Error adding rent'
        });

    }

}


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
const getRentHistoryByClient = async (req, res) => {

    try {

        const { identification } = req.params;

        const history = await RENT.findAll({

            where: {
                identification_fk: identification
            },

            include: [
                {
                    model: ROUTE_DISTANCE,
                    required: false
                }
            ],

            order: [
                ['start_date', 'DESC']
            ]

        });

        if(history.length === 0){

            return res.status(404).json({
                message: 'No rent history found'
            });

        }

        res.status(200).json({

            message: 'Rent history retrieved successfully',
            timestamp: new Date(),
            data: history

        });

    } catch(error){

        console.log('Error getting rent history:', error);

        res.status(500).json({
            message: 'Error getting rent history'
        });

    }

}

// Historial de rentas por vehículo
const getRentHistoryByPlate = async (req, res) => {

    try {

        const { plate } = req.params;

        const history = await RENT.findAll({

            where: {
                plate_fk: plate
            },

            include: [
                {
                    model: ROUTE_DISTANCE,
                    required: false
                }
            ],

            order: [
                ['start_date', 'DESC']
            ]

        });

        if(history.length === 0){

            return res.status(404).json({
                message: 'No vehicle history found'
            });

        }

        res.status(200).json({

            message: 'Vehicle history retrieved successfully',
            timestamp: new Date(),
            data: history

        });

    } catch(error){

        console.log('Error getting vehicle history:', error);

        res.status(500).json({
            message: 'Error getting vehicle history'
        });

    }

}
// Actualiza comentarios de cliente y empleado/empresa en una renta
const updateComments = async (req, res) => {

    try {

        const { id } = req.params;

        const {
            client_comment,
            employee_comment,
            company_comment
        } = req.body;

        const rent = await RENT.findByPk(id);

        if(!rent){

            return res.status(404).json({
                message: 'Rent not found'
            });

        }

        await rent.update({
            client_comment,
            employee_comment,
            company_comment: company_comment ?? employee_comment
        });

        res.status(200).json({

            message: 'Comments updated successfully',
            data: rent

        });

    } catch(error){

        console.log('Error updating comments:', error);

        res.status(500).json({
            message: 'Error updating comments'
        });

    }

}

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
}