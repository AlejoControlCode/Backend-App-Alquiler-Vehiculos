/**
 * Index de modelos
 * - Importa y exporta todos los modelos para centralizar su uso
 * - `AsyncModels()` sincroniza los modelos con la base de datos
 */
const { sequelize } = require('../../Config/database');
const Cliente = require('./cliente');
const Vehicle = require('./Vehicle');
const Rent = require('./Rent');
const Tecnomecanica = require('./Tecnomecanica');
const RouteDistance = require('./RouteDistance');

const AsyncModels = async () => {
    try {
        Rent.hasOne(RouteDistance, { foreignKey: 'rent_id' });
        RouteDistance.belongsTo(Rent, { foreignKey: 'rent_id' });

        await sequelize.sync();
        console.log('Models synchronized correctly');
    }
    catch (error) {
        console.error('Error synchronizing models:', error);
    }
}

module.exports ={
    Cliente,
    Vehicle,
    Rent,
    Tecnomecanica,
    RouteDistance,
    AsyncModels
}
