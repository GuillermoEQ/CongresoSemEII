const Medical_Records = require('../models/medical_records.model');

// Crear y guardar un nuevo registro médico
exports.create = async (req, res) => {
  try {
    const medicalRecord = await Medical_Records.create(req.body);
    res.status(201).send(medicalRecord);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the Medical Record.'
    });
  }
};

// Obtener todos los registros médicos
exports.findAll = async (req, res) => {
  try {
    const medicalRecords = await Medical_Records.findAll();
    res.status(200).send(medicalRecords);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving medical records.'
    });
  }
};

// Obtener un registro médico por ID
exports.findOne = async (req, res) => {
  try {
    const medicalRecord = await Medical_Records.findByPk(req.params.id);
    if (medicalRecord) {
      res.status(200).send(medicalRecord);
    } else {
      res.status(404).send({
        message: `Cannot find Medical Record with id=${req.params.id}.`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retrieving Medical Record with id=${req.params.id}`
    });
  }
};

// Actualizar un registro médico por ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Medical_Records.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedMedicalRecord = await Medical_Records.findByPk(req.params.id);
      res.status(200).send(updatedMedicalRecord);
    } else {
      res.status(404).send({
        message: `Cannot update Medical Record with id=${req.params.id}. Maybe Medical Record was not found or req.body is empty!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error updating Medical Record with id=${req.params.id}`
    });
  }
};

// Eliminar un registro médico por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Medical_Records.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(200).send({
        message: 'Medical Record was deleted successfully!'
      });
    } else {
      res.status(404).send({
        message: `Cannot delete Medical Record with id=${req.params.id}. Maybe Medical Record was not found!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Could not delete Medical Record with id=${req.params.id}`
    });
  }
};
