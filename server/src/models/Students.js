// Student model
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  asistencia_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  institution: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  carrera: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  grado: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  tableName: 'students', // nombre de la tabla en PostgreSQL
  timestamps: false
});

module.exports = Student;
