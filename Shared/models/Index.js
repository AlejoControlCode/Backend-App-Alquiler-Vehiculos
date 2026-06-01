// Import the configured Sequelize instance
const { sequelize } = require('../../Config/database');

// Import application models
const Cliente = require('./cliente');
const Vehicle = require('./Vehicle');
const Rent = require('./Rent');
const Tecnomecanica = require('./Tecnomecanica');

// Synchronize all models with the database
const AsyncModels = async () => {
    try {

        // Create database tables based on model definitions
        // if they do not already exist
        await sequelize.sync();

        console.log('Models synchronized correctly');

    } catch (error) {

        // Handle errors during model synchronization
        console.error('Error synchronizing models:', error);
    }
}

// Export models and synchronization function
module.exports = {
    Cliente,
    Vehicle,
    Rent,
    Tecnomecanica,
    AsyncModels
}