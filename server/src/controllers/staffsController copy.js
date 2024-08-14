const Staff = require('../models/Staffs');

// GET ALL STAFF
exports.getAllStaffs = async (req, res) => {
  try {
    const staffs = await Staff.findAll();
    res.status(200).json(staffs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET STAFF BY ID
exports.getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findByPk(req.params.id);
    if (staff) {
      res.status(200).json(staff);
    } else {
      res.status(404).json({ error: 'Staff not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE STAFF
exports.createStaff = async (req, res) => {
  try {
    const staff = await Staff.create(req.body);
    res.status(201).json(staff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE STAFF
exports.updatedStaff = async (req, res) => {
  try {
    const [updated] = await Staff.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedStaff = await Staff.findByPk(req.params.id);
      res.status(200).json(updatedStaff);
    } else {
      res.status(404).json({ error: 'Staff not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE STAFF
exports.deleteStaff = async (req, res) => {
  try {
    const deleted = await Staff.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Staff not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};