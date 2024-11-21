const express = require('express');
const router = express.Router();
const taldeController = require('../controllers/talde.controller');
const Taldea = require('../models/talde.model'); // Add this line


router.post('/', taldeController.createTalde);
router.post('/assign', taldeController.assignIkasleToTalde);
router.get('/', taldeController.getTaldeak);


module.exports = router;
