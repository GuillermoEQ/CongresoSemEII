<<<<<<< HEAD
//SERA MODIFICADO EL ARCHIVO

const express = require('express');
const studentController = require('../controllers/studentsController');
const router = express.Router();

// CRUD routes for Students
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createStudent);
router.put('/:id', studentController.updateStudent);
=======
const express = require('express');
const studentController = require('../controllers/studentsController'); // importamos los controllers
const router = express.Router(); // rutas

// creamos las rutas CRUD
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createStudent);
router.put('/:id', studentController.updatedStudent);
>>>>>>> 04fa756cfe6108a83497b6b881833aaf195761d1
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
