const Activitie = require('../models/Activities');

// GET ALL ACTIVITIES
exports.getAllActivities = async (req, res) => {
  try {
    const activities = await Activitie.findAll();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ACTIVITIE BY ID
exports.getActivitieById = async (req, res) => {
  try {
    const activitie = await Activitie.findByPk(req.params.id);
    if (activitie) {
      res.status(200).json(activitie);
    } else {
      res.status(404).json({ error: 'Activitie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE ACTIVITIE
exports.createActivitie = async (req, res) => {
  try {
    const activitie = await Activitie.create(req.body);
    res.status(201).json(activitie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE ACTIVITIE
exports.updatedActivitie = async (req, res) => {
  try {
    const [updated] = await Activitie.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedActivitie = await Activitie.findByPk(req.params.id);
      res.status(200).json(updatedActivitie);
    } else {
      res.status(404).json({ error: 'Activitie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE ACTIVITIE
exports.deleteActivitie = async (req, res) => {
  try {
    const deleted = await Activitie.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Activitie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};