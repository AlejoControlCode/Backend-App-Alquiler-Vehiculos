// Create a new rental record
const AddRent = async (req, res) => {

    try {

        // Extract rental data from the request body
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

        // Validate required fields
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

        // Create a new rental in the database
        const newRent = await RENT.create({

            identification_fk,
            plate_fk,
            start_date,
            end_date,
            total_price,
            rental_status,
            client_comment,
            company_comment

        });

        // Return a successful creation response
        res.status(201).json({

            message: 'Rent created successfully',
            timestamp: new Date(),
            data: newRent

        });

    } catch(error) {

        // Handle unexpected errors during rental creation
        console.log('Error adding rent:', error);

        res.status(500).json({
            message: 'Error adding rent'
        });

    }

}

// Retrieve rental history for a specific client
const getRentHistoryByClient = async (req, res) => {

    try {

        // Get client identification from URL parameters
        const { identification } = req.params;

        // Retrieve all rentals associated with the client
        const history = await RENT.findAll({

            where: {
                identification_fk: identification
            },

            // Sort results by rental start date (most recent first)
            order: [
                ['start_date', 'DESC']
            ]

        });

        // Check whether rental history exists
        if(history.length === 0){

            return res.status(404).json({
                message: 'No rent history found'
            });

        }

        // Return rental history
        res.status(200).json({

            message: 'Rent history retrieved successfully',
            timestamp: new Date(),
            data: history

        });

    } catch(error){

        // Handle unexpected errors while retrieving rental history
        console.log('Error getting rent history:', error);

        res.status(500).json({
            message: 'Error getting rent history'
        });

    }

}

// Retrieve rental history for a specific vehicle
const getRentHistoryByPlate = async (req, res) => {

    try {

        // Get vehicle plate number from URL parameters
        const { plate } = req.params;

        // Retrieve all rentals associated with the vehicle
        const history = await RENT.findAll({

            where: {
                plate_fk: plate
            },

            // Sort results by rental start date (most recent first)
            order: [
                ['start_date', 'DESC']
            ]

        });

        // Check whether rental history exists
        if(history.length === 0){

            return res.status(404).json({
                message: 'No vehicle history found'
            });

        }

        // Return vehicle rental history
        res.status(200).json({

            message: 'Vehicle history retrieved successfully',
            timestamp: new Date(),
            data: history

        });

    } catch(error){

        // Handle unexpected errors while retrieving vehicle history
        console.log('Error getting vehicle history:', error);

        res.status(500).json({
            message: 'Error getting vehicle history'
        });

    }

}

// Update client and employee comments for a rental
const updateComments = async (req, res) => {

    try {

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
        if(!rent){

            return res.status(404).json({
                message: 'Rent not found'
            });

        }

        // Update rental comments
        await rent.update({

            client_comment,
            employee_comment

        });

        // Return successful update response
        res.status(200).json({

            message: 'Comments updated successfully',
            data: rent

        });

    } catch(error){

        // Handle unexpected errors during comment update
        console.log('Error updating comments:', error);

        res.status(500).json({
            message: 'Error updating comments'
        });

    }

}

// Export controller functions
module.exports = {

    AddRent,
    getRentHistoryByClient,
    getRentHistoryByPlate,
    updateComments

}