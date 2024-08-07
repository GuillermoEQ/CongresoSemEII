const express = require('express');
const router = express.Router();
const lecturersController = require('../controllers/lecturers.controller');

// Crear un nuevo conferencista
router.post('/', lecturersController.create);

// Obtener todos los conferencistas
router.get('/', lecturersController.findAll);

// Obtener un conferencista por ID
router.get('/:id', lecturersController.findOne);

// Actualizar un conferencista por ID
router.put('/:id', lecturersController.update);

// Eliminar un conferencista por ID
router.delete('/:id', lecturersController.delete);

module.exports = router;
