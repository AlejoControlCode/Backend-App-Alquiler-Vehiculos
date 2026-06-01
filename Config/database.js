// Import Sequelize class to manage the database connection
const { Sequelize } = require('sequelize');

// Load environment variables from the .env file
require('dotenv').config();

// Create a Sequelize instance using database credentials
const sequelize = new Sequelize(
    process.env.DB_NAME,      // Database name
    process.env.DB_USER,      // Database username
    process.env.DB_PASSWORD,  // Database password
    {
        host: process.env.DB_HOST, // Database server host
        port: process.env.DB_PORT, // Database server port
        dialect: 'mysql',          // Database engine

        // Disable SQL query logging in the console
        logging: false,

        // Connection pool configuration
        pool: {
            max: 5,         // Maximum number of active connections
            min: 0,         // Minimum number of active connections
            acquire: 30000, // Maximum time to get a connection (ms)
            idle: 10000     // Time before closing an idle connection (ms)
        }
    }
);

// Function to test the database connection
const testConexion = async () => {
    try {
        // Attempt to authenticate the connection
        await sequelize.authenticate();

        // Success message
        console.log('Successful connection to the database');
    } catch (error) {
        // Display error message if connection fails
        console.error('Could not connect to the database:', error);
    }
}

// Export the Sequelize instance and connection test function
module.exports = {
    sequelize,
    testConexion
};