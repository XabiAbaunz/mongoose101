const express = require('express');
const router = express.Router();
const ikasleController = require('../controllers/ikasle.controller');

router.get('/', ikasleController.getIkasleak);
router.post('/', ikasleController.createIkasle);
router.get('/:id', ikasleController.getIkasleById);
router.delete('/:id', ikasleController.deleteIkasleById);
router.put('/:id', ikasleController.updateIkasleById);

// Gehitu beste routes-ak...

module.exports = router;