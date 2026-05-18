const TECNOMECANICA = require('../Shared/models/Tecnomecanica');

const AddTecnomecanica = async (req, res) => {
    try {
        const {
            ordenServicio,
            fechaSolicitud,
            plate_fk,
            nombreTecnico,
            fechaMantenimiento,
            estado
        } = req.body;

        if (!ordenServicio || !plate_fk || !estado) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        const existingTecnomecanica = await TECNOMECANICA.findOne({
            where: { ordenServicio }
        });
        if (existingTecnomecanica) {
            return res.status(409).json({
                message: 'Tecnomecanica already exists'
            });
        }

        const newTecnomecanica = await TECNOMECANICA.create({
            ordenServicio,
            fechaSolicitud,
            plate_fk,
            nombreTecnico,
            fechaMantenimiento,
            estado
        })

        res.status(201).json({
            message: 'The tecnomecanica was added correctly',
            timestamp: new Date(),
            data: newTecnomecanica
        })

    } catch (error) {
        console.log('Error adding tecnomecanica:', error);
        res.status(500).json({ message: 'Error adding tecnomecanica' });
    }
}


const getTecnomecanica = async (req, res) => {
    try {
        const { plate_fk } = req.params;

        const tecnomecanica = await TECNOMECANICA.findOne({
            where: { plate_fk }
        })


        if (!tecnomecanica) {
            return res.status(404).json({
                message: 'Tecnomecanica not found'
            });
        }

        res.status(200).json({
            message: 'Tecnomecanica retrieved successfully',
            timestamp: new Date(),
            data: tecnomecanica
        })

    } catch (error) {
        console.log('Error getting tecnomecanica:', error);
        res.status(500).json({ message: 'Error getting tecnomecanica' });s
    }
}



module.exports = {
    AddTecnomecanica,
    getTecnomecanica

}


