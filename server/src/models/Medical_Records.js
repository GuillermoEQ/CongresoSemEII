const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./Users');

const Medical_Records = sequelize.define('Medical_Records', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  allergies: {
    type: DataTypes.STRING,
  },
  dietary_restrictions: {
    type: DataTypes.STRING,
  },
  medications: {
    type: DataTypes.STRING,
  },
  chronic_diseases: {
    type: DataTypes.STRING,
  },
  emergency_contact: {
    type: DataTypes.STRING,
  },
  emergency_contact_phone: {
    type: DataTypes.STRING,
  },
  observations: {
    type: DataTypes.TEXT,
  }
}, {
  tableName: 'medical_records',
  timestamps: true  // Esto agrega las columnas createdAt y updatedAt
});

// Definir la relación
Medical_Records.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Medical_Records, { foreignKey: 'user_id' });

module.exports = Medical_Records;
