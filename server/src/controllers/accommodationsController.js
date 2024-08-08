const Accommodation = require('../models/Accommodations');

// GET ALL ACCOMMODATIONS
exports.getAllAccommodations = async (req, res) => {
  try {
    const accommodations = await Accommodation.findAll();
    res.status(200).json(accommodations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ACCOMMODATION BY ID
exports.getAccommodationById = async (req, res) => {
  try {
    const accommodation = await Accommodation.findByPk(req.params.id);
    if (accommodation) {
      res.status(200).json(accommodation);
    } else {
      res.status(404).json({ error: 'Accommodation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE ACCOMMODATION
exports.createAccommodation = async (req, res) => {
  try {
    const accommodation = await Accommodation.create(req.body);
    res.status(201).json(accommodation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE ACCOMMODATION
exports.updateAccommodation = async (req, res) => {
  try {
    const [updated] = await Accommodation.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedAccommodation = await Accommodation.findByPk(req.params.id);
      res.status(200).json(updatedAccommodation);
    } else {
      res.status(404).json({ error: 'Accommodation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE ACCOMMODATION
exports.deleteAccommodation = async (req, res) => {
  try {
    const deleted = await Accommodation.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Accommodation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
