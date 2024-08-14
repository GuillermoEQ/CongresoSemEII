const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const AccommodationType = sequelize.define('AccommodationType', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  type: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
  }
}, {
  tableName: 'accommodation_type', // nombre de la tabla en PostgreSQL
  timestamps: false
});

module.exports = AccommodationType;
