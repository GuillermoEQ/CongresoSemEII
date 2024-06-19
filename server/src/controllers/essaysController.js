const Essay = require('../models/Essays');

// GET ALL ESSAY
exports.getAllEssays = async (req, res) => {
  try {
    const essays = await Essay.findAll();
    res.status(200).json(essays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ESSAY BY ID
exports.getEssayById = async (req, res) => {
  try {
    const essay = await Essay.findByPk(req.params.id);
    if (essay) {
      res.status(200).json(essay);
    } else {
      res.status(404).json({ error: 'Essay not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE ESSAY
exports.createEssay = async (req, res) => {
  try {
    const essay = await Essay.create(req.body);
    res.status(201).json(essay);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE ESSAY
exports.updatedEssay = async (req, res) => {
  try {
    const [updated] = await Essay.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedEssay = await Essay.findByPk(req.params.id);
      res.status(200).json(updatedEssay);
    } else {
      res.status(404).json({ error: 'Essay not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE ESSAY
exports.deleteEssay = async (req, res) => {
  try {
    const deleted = await Essay.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Essay not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};