<<<<<<< HEAD
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
=======
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');


const Student = sequelize.define('Students', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
    }, {
    tableName: 'students', // nombre de la tabla de postgreSQL
    timestamps: false
});

module.exports = Student;
>>>>>>> 04fa756cfe6108a83497b6b881833aaf195761d1
