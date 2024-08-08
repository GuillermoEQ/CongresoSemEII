const express = require('express');
const accommodationTypeController = require('../controllers/accommodations_typeController');
const router = express.Router();

//Rutas CRUD
router.get('/', accommodationTypeController.getAllAccommodationTypes);
router.get('/:id', accommodationTypeController.getAccommodationTypeById);
router.post('/', accommodationTypeController.createAccommodationType);
router.put('/:id', accommodationTypeController.updateAccommodationType);
router.delete('/:id', accommodationTypeController.deleteAccommodationType);

module.exports = router;
