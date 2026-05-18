const express = require('express');
require('dotenv').config();
const { AsyncModels } = require('./Shared/models/Index');
const { testConexion } = require('./Config/database');
const { corsMiddleware } = require('./Shared/middleware/cors');




const APP = express();
APP.use(express.json());
APP.use(express.urlencoded({ extended: true }));
APP.use(corsMiddleware);

const PORT = process.env.PORT || 3001;



// space for routes

APP.use('/api/Clientes', require('./Routes/ClientesRoutes'));   
APP.use('/api/Vehicles', require('./Routes/VehiclesRoutes'));
// APP.use('/api/Rents', require('./Routes/RentsRoutes'));
APP.use('/api/Tecnomecanica', require('./Routes/TecnomecanicaRoutes'));







// translates space to start the database and the server

const initializeDatabase = async () => {
    await testConexion()
    await AsyncModels()

}


const startServer = async () => {

    try {
        await initializeDatabase();
        APP.listen(PORT, () => {
            console.log(`This joke is circulating on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }

}

startServer();