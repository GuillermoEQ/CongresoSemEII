const Lecturer = require('../models/lecturers.model');

// Crear y guardar un nuevo conferencista
exports.create = async (req, res) => {
  try {
    const lecturer = await Lecturer.create(req.body);
    res.status(201).send(lecturer);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the Lecturer.'
    });
  }
};

// Obtener todos los conferencistas
exports.findAll = async (req, res) => {
  try {
    const lecturers = await Lecturer.findAll();
    res.status(200).send(lecturers);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving lecturers.'
    });
  }
};

// Obtener un conferencista por ID
exports.findOne = async (req, res) => {
  try {
    const lecturer = await Lecturer.findByPk(req.params.id);
    if (lecturer) {
      res.status(200).send(lecturer);
    } else {
      res.status(404).send({
        message: `Cannot find Lecturer with id=${req.params.id}.`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retrieving Lecturer with id=${req.params.id}`
    });
  }
};

// Actualizar un conferencista por ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Lecturer.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedLecturer = await Lecturer.findByPk(req.params.id);
      res.status(200).send(updatedLecturer);
    } else {
      res.status(404).send({
        message: `Cannot update Lecturer with id=${req.params.id}. Maybe Lecturer was not found or req.body is empty!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error updating Lecturer with id=${req.params.id}`
    });
  }
};

// Eliminar un conferencista por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Lecturer.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(200).send({
        message: 'Lecturer was deleted successfully!'
      });
    } else {
      res.status(404).send({
        message: `Cannot delete Lecturer with id=${req.params.id}. Maybe Lecturer was not found!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Could not delete Lecturer with id=${req.params.id}`
    });
  }
};
