const express = require('express');
const activitieController = require('../controllers/activitiesController'); // importamos los controllers
const router = express.Router(); // rutas

// creamos las rutas CRUD
router.get('/', activitieController.getAllActivities);
router.get('/:id', activitieController.getActivitieById);
router.post('/', activitieController.createActivitie);
router.put('/:id', activitieController.updatedActivitie);
router.delete('/:id', activitieController.deleteActivitie);

module.exports = router;
