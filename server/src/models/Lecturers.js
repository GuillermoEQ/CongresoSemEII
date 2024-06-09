const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Lecturer = sequelize.define('Lecturers', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position_held: {
      type: DataTypes.STRING,
      allowNull: false
    },
    biography: {
      type: DataTypes.STRING,
      allowNull: false
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary_presentation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    social_media: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'lecturers', // nombre de la tabla de postgreSQL
    timestamps: false
});

module.exports = Lecturer;