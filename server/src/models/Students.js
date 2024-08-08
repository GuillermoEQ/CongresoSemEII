const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const User = require('./Users');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
  institution: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  carrera: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  nivel: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'student', // nombre de la tabla en PostgreSQL
  timestamps: false
});

module.exports = Student;
