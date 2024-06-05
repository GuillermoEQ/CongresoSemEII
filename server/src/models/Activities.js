const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Activitie = sequelize.define('Activities', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lecturer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    end: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    day: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'activities', // nombre de la tabla de postgreSQL
    timestamps: false
});

module.exports = Activitie;