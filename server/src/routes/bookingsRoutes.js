const express = require('express');
const bookingController = require('../controllers/bookingsController');
const router = express.Router();

//Rutas CRUD
router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);
router.post('/', bookingController.createBooking);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;
