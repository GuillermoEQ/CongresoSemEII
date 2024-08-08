const Register = require('../models/Registers');

// GET ALL REGISTER
exports.getAllRegisters = async (req, res) => {
  try {
    const registers = await Register.findAll();
    res.status(200).json(registers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET REGISTER BY ID
exports.getRegisterById = async (req, res) => {
  try {
    const register = await Register.findByPk(req.params.id);
    if (register) {
      res.status(200).json(register);
    } else {
      res.status(404).json({ error: 'Register not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE REGISTER
exports.createRegister = async (req, res) => {
  try {
    const register = await Register.create(req.body);
    res.status(201).json(register);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE REGISTER
exports.updatedRegister = async (req, res) => {
  try {
    const [updated] = await Register.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedRegister = await Register.findByPk(req.params.id);
      res.status(200).json(updatedRegister);
    } else {
      res.status(404).json({ error: 'Register not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE REGISTER
exports.deleteRegister = async (req, res) => {
  try {
    const deleted = await Register.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Register not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};