const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activities.controller');

// Crear una nueva actividad
router.post('/', activitiesController.create);

// Obtener todas las actividades
router.get('/', activitiesController.findAll);

// Obtener una actividad por ID
router.get('/:id', activitiesController.findOne);

// Actualizar una actividad por ID
router.put('/:id', activitiesController.update);

// Eliminar una actividad por ID
router.delete('/:id', activitiesController.delete);

module.exports = router;
