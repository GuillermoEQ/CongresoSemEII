const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Accommodation = require('./Accommodations');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // CLAVES FORANEAS [
  accommodation_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Accommodation,
      key: 'id'
    },
    allowNull: false
  },
    //Modificar user_id
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }, // ]
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
