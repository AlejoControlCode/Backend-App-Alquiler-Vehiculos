/**
 * database.js
 * Configuración de Sequelize para la conexión a la base de datos.
 * - Exporta `sequelize` para ser usado por los modelos.
 * - Exporta `testConexion()` para verificar que la conexión funciona.
 */
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Crear la instancia de Sequelize usando variables de entorno
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

// Función para probar la conexión y mostrar un mensaje en consola
const testConexion = async () => {
    try {
        await sequelize.authenticate();
        console.log('Successful connection to the database');
    } catch (error) {
        console.error('Could not connect to the database:', error);
    }
}

module.exports = {
    sequelize,
    testConexion
};