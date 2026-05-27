/**
 * Rutas para tecnomecanica
 * - POST /AgregarTecnomecanica -> crear solicitud
 * - GET /ObtenerTecnomecanica/:plate_fk -> obtener por placa
 */
const Express = require('express');
const { AddTecnomecanica, getTecnomecanica } = require('../Controllers/TecnomecanicaController');

const router = Express.Router();

router.post('/AgregarTecnomecanica',AddTecnomecanica);
router.get('/ObtenerTecnomecanica/:plate_fk',getTecnomecanica);

module.exports = router;
