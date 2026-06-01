<<<<<<< HEAD
// Custom middleware to enable Cross-Origin Resource Sharing (CORS)
=======
/**
 * Middleware CORS
 * Permite solicitudes desde cualquier origen y habilita headers y métodos comunes.
 * En producción se debería restringir `Access-Control-Allow-Origin` según el dominio.
 */
>>>>>>> f7f798ebc409c327e789301b216bd4b7bf3b44e3
const corsMiddleware = (req, res, next) => {

    // Allow requests from any origin
    res.header("Access-Control-Allow-Origin", "*");

    // Define the allowed HTTP methods
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );

    // Define the allowed request headers
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    // Pass control to the next middleware in the request pipeline
    next();
}

// Export the middleware to be used throughout the application
module.exports = {
    corsMiddleware
}