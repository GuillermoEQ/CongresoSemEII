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
  // CLAVE FORANEA
  user_id: {
    type: DataTypes.INTEGER,
    references:{
      model: User,
      key: 'id'
    },
    allowNull: false
  },
  accommodation_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Accommodation,
      key: 'id'
    },
    allowNull: false
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
    allowNull: false
  }
}, {
  tableName: 'booking', // nombre de la tabla en PostgreSQL
  timestamps: false
});

// Relación de la FK: Una reserva pertenece a un alojamiento
Booking.belongsTo(Accommodation, { foreignKey: 'accommodation_id' });
Accommodation.hasMany(Booking, { foreignKey: 'accommodation_id' });

module.exports = Booking;
