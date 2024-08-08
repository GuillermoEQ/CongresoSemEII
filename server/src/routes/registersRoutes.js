const express = require('express');
const registerController = require('../controllers/registersController'); // importamos los controllers
const router = express.Router(); // rutas

// creamos las rutas CRUD
router.get('/', registerController.getAllRegisters);
router.get('/:id', registerController.getRegisterById);
router.post('/', registerController.createRegister);
router.put('/:id', registerController.updatedRegister);
router.delete('/:id', registerController.deleteRegister);

module.exports = router;
