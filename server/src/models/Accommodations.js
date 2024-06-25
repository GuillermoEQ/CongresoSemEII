const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const AccommodationType = require('./Accommodations_type');

const Accommodation = sequelize.define('Accommodation', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  number_address: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  phone_number: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  entry_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  exit_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  max_plazas: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  // CLAVES FORANEAS
    //Modificar user_id
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type_accommodation_id: {
    type: DataTypes.INTEGER,
    references: {
      model: AccommodationType,
      key: 'id'
    },
    allowNull: false
  }
}, {
  tableName: 'accommodations', // nombre de la tabla en PostgreSQL
  timestamps: false
});

// Relaciones
Accommodation.belongsTo(AccommodationType, { foreignKey: 'type_accommodation_id' });
AccommodationType.hasMany(Accommodation, { foreignKey: 'type_accommodation_id' });

module.exports = Accommodation;
