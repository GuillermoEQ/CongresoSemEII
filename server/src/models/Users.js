const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID, 
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,  // Genera un UUID automáticamente
  },
  name: {
    type: DataTypes.STRING,
  },
  surname: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'users',  // Nombre de la tabla en la base de datos
  timestamps: true     // Esto agrega las columnas createdAt y updatedAt
});

module.exports = User;