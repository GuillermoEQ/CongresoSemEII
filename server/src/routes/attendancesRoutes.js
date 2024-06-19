const express = require('express');
const attendanceController = require('../controllers/attendancesController'); // importamos los controllers
const router = express.Router(); // rutas

// creamos las rutas CRUD
router.get('/', attendanceController.getAllAttendance);
router.get('/:id', attendanceController.getAttendanceById);
router.post('/', attendanceController.createAttendance);
router.put('/:id', attendanceController.updatedAttendance);
router.delete('/:id', attendanceController.deleteAttendance);

module.exports = router;
