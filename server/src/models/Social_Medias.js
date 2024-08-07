const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Users = require('./Users');
const Students = require('./Students');


const Social_Medias = sequelize.define('Social_Medias', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Usuarios', // Nombre de la tabla Usuarios
      key: 'id'
    }
  },
  platform: {
    type: DataTypes.STRING,
    allowNull: false
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'social_medias',
  timestamps: false
});

// Definir la relación
Social_Medias.belongsTo(Users, { foreignKey: 'user_id' });
Users.hasMany(Social_Medias, { foreignKey: 'user_id' });

module.exports = Social_Medias;
