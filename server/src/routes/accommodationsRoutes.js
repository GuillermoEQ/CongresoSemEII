//SERA MODIFICADO EL ARCHIVO

const express = require('express');
const accommodationController = require('../controllers/accommodationsController');
const router = express.Router();

// CRUD routes for Accommodations
router.get('/', accommodationController.getAllAccommodations);
router.get('/:id', accommodationController.getAccommodationById);
router.post('/', accommodationController.createAccommodation);
router.put('/:id', accommodationController.updateAccommodation);
router.delete('/:id', accommodationController.deleteAccommodation);

module.exports = router;
