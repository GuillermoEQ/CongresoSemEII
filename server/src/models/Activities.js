const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Activitie = sequelize.define('Activities', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activitiy_type: {
      type: DataTypes.STRING,
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
    quota: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'activities', // nombre de la tabla de postgreSQL
    timestamps: false
});

module.exports = Activitie;