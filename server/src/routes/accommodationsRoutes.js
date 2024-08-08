const express = require('express');
const accommodationController = require('../controllers/accommodationsController');
const router = express.Router();

//Rutas CRUD
router.get('/', accommodationController.getAllAccommodations);
router.get('/:id', accommodationController.getAccommodationById);
router.post('/', accommodationController.createAccommodation);
router.put('/:id', accommodationController.updateAccommodation);
router.delete('/:id', accommodationController.deleteAccommodation);

module.exports = router;
