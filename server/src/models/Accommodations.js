const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const AccommodationType = require('./Accommodations_type');
const User = require('./Users');

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
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: User,
        key: 'id'
    }
},
  type_accommodation_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: AccommodationType,
      key: 'id'
    }
  }
}, {
  tableName: 'accommodations', // nombre de la tabla en PostgreSQL
  timestamps: false
});

// Relaciones.
Accommodation.belongsTo(AccommodationType, { foreignKey: 'type_accommodation_id' });
AccommodationType.hasMany(Accommodation, { foreignKey: 'type_accommodation_id' });

Accommodation.belongsTo(User, { foreignKey: 'user_id' }); 
User.hasMany(Accommodation, { foreignKey: 'user_id' });  

module.exports = Accommodation;
