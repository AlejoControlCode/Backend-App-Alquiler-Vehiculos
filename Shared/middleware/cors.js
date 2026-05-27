/**
 * Middleware CORS
 * Permite solicitudes desde cualquier origen y habilita headers y métodos comunes.
 * En producción se debería restringir `Access-Control-Allow-Origin` según el dominio.
 */
const corsMiddleware = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
}

module.exports ={
    corsMiddleware
} 