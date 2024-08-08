const express = require('express');
const staffController = require('../controllers/staffsController'); // importamos los controllers
const router = express.Router(); // rutas

// creamos las rutas CRUD
router.get('/', staffController.getAllStaffs);
router.get('/:id', staffController.getStaffById);
router.post('/', staffController.createStaff);
router.put('/:id', staffController.updatedStaff);
router.delete('/:id', staffController.deleteStaff);

module.exports = router;
