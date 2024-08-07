const express = require('express');
const router = express.Router();
const medicalRecordsController = require('../controllers/medical_records.controller');

// Crear un nuevo registro médico
router.post('/', medicalRecordsController.create);

// Obtener todos los registros médicos
router.get('/', medicalRecordsController.findAll);

// Obtener un registro médico por ID
router.get('/:id', medicalRecordsController.findOne);

// Actualizar un registro médico por ID
router.put('/:id', medicalRecordsController.update);

// Eliminar un registro médico por ID
router.delete('/:id', medicalRecordsController.delete);

module.exports = router;
