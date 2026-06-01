<<<<<<< HEAD
// Import Express framework
=======
/**
 * app.js
 * Punto de entrada de la aplicación Express.
 * - Configura middlewares
 * - Registra rutas
 * - Inicializa la base de datos y arranca el servidor
 */
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const express = require('express');

// Load environment variables from the .env file
require('dotenv').config();

// Import model synchronization function
const { AsyncModels } = require('./Shared/models/Index');

// Import database connection test function
const { testConexion } = require('./Config/database');

// Import custom CORS middleware
const { corsMiddleware } = require('./Shared/middleware/cors');

// Create Express application instance
const APP = express();

// Enable JSON request body parsing
APP.use(express.json());

// Enable URL-encoded request body parsing
APP.use(express.urlencoded({ extended: true }));

// Enable CORS middleware for cross-origin requests
APP.use(corsMiddleware);

// Define server port from environment variables or use default value
const PORT = process.env.PORT || 3001;

// API Routes


// Client management routes
APP.use('/api/Clientes', require('./Routes/ClientesRoutes'));

// Vehicle management routes
APP.use('/api/Vehicles', require('./Routes/VehiclesRoutes'));
<<<<<<< HEAD

// Rental management routes (currently disabled)
// APP.use('/api/Rents', require('./Routes/RentsRoutes'));

// Vehicle inspection and maintenance routes
=======
APP.use('/api/Rents', require('./Routes/RentsRoutes'));
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
APP.use('/api/Tecnomecanica', require('./Routes/TecnomecanicaRoutes'));

// Database Initialization

// Initialize database connection and synchronize models
const initializeDatabase = async () => {

    // Test database connectivity
    await testConexion();

    // Synchronize Sequelize models with database tables
    await AsyncModels();

}

// Server Startup

// Start the application server
const startServer = async () => {

    try {

        // Initialize database before accepting requests
        await initializeDatabase();

        // Start listening for incoming requests
        APP.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });

    } catch (error) {

        // Handle startup errors
        console.error('Error starting server:', error);
    }

}

// Launch the application
startServer();