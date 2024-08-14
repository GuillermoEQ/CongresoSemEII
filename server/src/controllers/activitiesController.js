const Activitie = require('../models/Activities');

// Crear y guardar una nueva actividad

exports.create = async (req, res) => {
  try {
    const activity = await Activitie.create(req.body);
    res.status(201).send(activity);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the Activity.'
    });
  }
};

// Obtener todas las actividades
exports.findAll = async (req, res) => {
  try {
    const activities = await Activitie.findAll();
    res.status(200).send(activities);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving activities.'
    });
  }
};

// Obtener una actividad por ID
exports.findOne = async (req, res) => {
  try {
    const activity = await Activitie.findByPk(req.params.id);
    if (activity) {
      res.status(200).send(activity);
    } else {
      res.status(404).send({
        message: `Cannot find Activity with id=${req.params.id}.`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retrieving Activity with id=${req.params.id}`
    });
  }
};

// Actualizar una actividad por ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Activitie.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedActivity = await Activitie.findByPk(req.params.id);
      res.status(200).send(updatedActivity);
    } else {
      res.status(404).send({
        message: `Cannot update Activity with id=${req.params.id}. Maybe Activity was not found or req.body is empty!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error updating Activity with id=${req.params.id}`
    });
  }
};

// Eliminar una actividad por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Activitie.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(200).send({
        message: 'Activity was deleted successfully!'
      });
    } else {
      res.status(404).send({
        message: `Cannot delete Activity with id=${req.params.id}. Maybe Activity was not found!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Could not delete Activity with id=${req.params.id}`
    });
  }
};
