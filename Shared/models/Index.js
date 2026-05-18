const { sequelize } = require('../../Config/database');
const Cliente = require('./cliente');
const Vehicle = require('./Vehicle');
const Rent = require('./Rent');
const Tecnomecanica = require('./Tecnomecanica');

const AsyncModels = async () => {
    try {
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
    AsyncModels
}
