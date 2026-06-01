<<<<<<< HEAD
// Import the configured Sequelize instance
=======
/**
 * Index de modelos
 * - Importa y exporta todos los modelos para centralizar su uso
 * - `AsyncModels()` sincroniza los modelos con la base de datos
 */
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const { sequelize } = require('../../Config/database');

// Import application models
const Cliente = require('./cliente');
const Vehicle = require('./Vehicle');
const Rent = require('./Rent');
const Tecnomecanica = require('./Tecnomecanica');
const RouteDistance = require('./RouteDistance');

// Synchronize all models with the database
const AsyncModels = async () => {
    try {
<<<<<<< HEAD

        // Create database tables based on model definitions
        // if they do not already exist
=======
        Rent.hasOne(RouteDistance, { foreignKey: 'rent_id' });
        RouteDistance.belongsTo(Rent, { foreignKey: 'rent_id' });

>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
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
    RouteDistance,
    AsyncModels
}