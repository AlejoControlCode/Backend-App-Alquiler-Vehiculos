const Express = require('express');

const {AddRent,getRentHistoryByClient,getRentHistoryByPlate,updateComments} = require('../Controllers/RentController');

const router = Express.Router();

router.post('/AddRent', AddRent);
router.get('/History/Client/:identification',getRentHistoryByClient);
router.get('/History/Vehicle/:plate',getRentHistoryByPlate);
router.put('/UpdateComments/:id',updateComments);

module.exports = router;