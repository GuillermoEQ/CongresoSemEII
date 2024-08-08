const AccommodationType = require('../models/Accommodations_type');

// GET ALL ACCOMMODATION TYPES
exports.getAllAccommodationTypes = async (req, res) => {
  try {
    const accommodationTypes = await AccommodationType.findAll();
    res.status(200).json(accommodationTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ACCOMMODATION TYPE BY ID
exports.getAccommodationTypeById = async (req, res) => {
  try {
    const accommodationType = await AccommodationType.findByPk(req.params.id);
    if (accommodationType) {
      res.status(200).json(accommodationType);
    } else {
      res.status(404).json({ error: 'Accommodation Type not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE ACCOMMODATION TYPE
exports.createAccommodationType = async (req, res) => {
  try {
    const accommodationType = await AccommodationType.create(req.body);
    res.status(201).json(accommodationType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE ACCOMMODATION TYPE
exports.updateAccommodationType = async (req, res) => {
  try {
    const [updated] = await AccommodationType.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedAccommodationType = await AccommodationType.findByPk(req.params.id);
      res.status(200).json(updatedAccommodationType);
    } else {
      res.status(404).json({ error: 'Accommodation Type not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE ACCOMMODATION TYPE
exports.deleteAccommodationType = async (req, res) => {
  try {
    const deleted = await AccommodationType.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Accommodation Type not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
