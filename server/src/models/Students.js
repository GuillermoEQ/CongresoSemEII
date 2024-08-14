const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const User = require('./Users');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // CLAVE FORANEA
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

// Relaciones.
Student.belongsTo(User, { foreignKey: 'user_id' }); 
User.hasMany(Student, { foreignKey: 'user_id' });

module.exports = Student;
