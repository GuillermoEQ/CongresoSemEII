// controllers/bookingController.js
const Booking = require('../models/Bookings');

// GET ALL BOOKINGS
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET BOOKING BY ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.status(404).json({ error: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE BOOKING
exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE BOOKING
exports.updateBooking = async (req, res) => {
  try {
    const [updated] = await Booking.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedBooking = await Booking.findByPk(req.params.id);
      res.status(200).json(updatedBooking);
    } else {
      res.status(404).json({ error: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE BOOKING
exports.deleteBooking = async (req, res) => {
  try {
    const deleted = await Booking.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
