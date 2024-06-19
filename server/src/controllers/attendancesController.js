const Attendance = require('../models/Attendances');

// GET ALL ATTENDANCES
exports.getAllAttendances = async (req, res) => {
  try {
    const attendances = await Attendance.findAll();
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ATTENDANCE BY ID
exports.getAttendanceById = async (req, res) => {
  try {
    const attendance = await Attendance.findByPk(req.params.id);
    if (attendance) {
      res.status(200).json(attendance);
    } else {
      res.status(404).json({ error: 'Attendance not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE ATTENDANCE
exports.createAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE ATTENDANCE
exports.updatedAttendance = async (req, res) => {
  try {
    const [updated] = await Attendance.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedAttendance = await Attendance.findByPk(req.params.id);
      res.status(200).json(updatedAttendance);
    } else {
      res.status(404).json({ error: 'Attendance not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE ATTENDANCE
exports.deleteAttendance = async (req, res) => {
  try {
    const deleted = await Attendance.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Attendance not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};