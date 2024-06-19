const express = require('express');
const essayController = require('../controllers/essaysController'); // importamos los controllers
const router = express.Router(); // rutas

// creamos las rutas CRUD
router.get('/', essayController.getAllEssays);
router.get('/:id', essayController.getEssayById);
router.post('/', essayController.createEssay);
router.put('/:id', essayController.updatedEssay);
router.delete('/:id', essayController.deleteEssay);

module.exports = router;
