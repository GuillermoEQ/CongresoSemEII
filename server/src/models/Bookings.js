const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Accommodation = require('./Accommodations');
const User = require('./Users');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // CLAVES FORANEAS
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  accommodation_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Accommodation,
      key: 'id'
    }
  },
  start_day: {
    type: DataTypes.DATE,
    allowNull: false
  },
  finish_day: {
    type: DataTypes.DATE,
    allowNull: false
  },
  plazas_reservadas: {
    type: DataTypes.INTEGER,
  }
}, {
  tableName: 'booking', // nombre de la tabla en PostgreSQL
  timestamps: false
});

// Relaciones.
Booking.belongsTo(Accommodation, { foreignKey: 'accommodation_id' });
Accommodation.hasMany(Booking, { foreignKey: 'accommodation_id' });

module.exports = Booking;
