const express = require('express');
const router = express.Router();
const socialMediasController = require('../controllers/social_medias.controller');

// Crear una nueva red social
router.post('/', socialMediasController.create);

// Obtener todas las redes sociales
router.get('/', socialMediasController.findAll);

// Obtener una red social por ID
router.get('/:id', socialMediasController.findOne);

// Actualizar una red social por ID
router.put('/:id', socialMediasController.update);

// Eliminar una red social por ID
router.delete('/:id', socialMediasController.delete);

module.exports = router;
