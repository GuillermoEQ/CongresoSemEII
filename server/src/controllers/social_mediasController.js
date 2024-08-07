const Social_Medias = require('../models/social_medias.model');

// Crear y guardar una nueva red social
exports.create = async (req, res) => {
  try {
    const socialMedia = await Social_Medias.create(req.body);
    res.status(201).send(socialMedia);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the Social Media.'
    });
  }
};

// Obtener todas las redes sociales
exports.findAll = async (req, res) => {
  try {
    const socialMedias = await Social_Medias.findAll();
    res.status(200).send(socialMedias);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving social medias.'
    });
  }
};

// Obtener una red social por ID
exports.findOne = async (req, res) => {
  try {
    const socialMedia = await Social_Medias.findByPk(req.params.id);
    if (socialMedia) {
      res.status(200).send(socialMedia);
    } else {
      res.status(404).send({
        message: `Cannot find Social Media with id=${req.params.id}.`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retrieving Social Media with id=${req.params.id}`
    });
  }
};

// Actualizar una red social por ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Social_Medias.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedSocialMedia = await Social_Medias.findByPk(req.params.id);
      res.status(200).send(updatedSocialMedia);
    } else {
      res.status(404).send({
        message: `Cannot update Social Media with id=${req.params.id}. Maybe Social Media was not found or req.body is empty!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error updating Social Media with id=${req.params.id}`
    });
  }
};

// Eliminar una red social por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Social_Medias.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(200).send({
        message: 'Social Media was deleted successfully!'
      });
    } else {
      res.status(404).send({
        message: `Cannot delete Social Media with id=${req.params.id}. Maybe Social Media was not found!`
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Could not delete Social Media with id=${req.params.id}`
    });
  }
};
