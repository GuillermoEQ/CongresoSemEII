const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const User = require('./Users');

const Lecturer = sequelize.define('Lecturers', {
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
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  institution: {
    type: DataTypes.STRING,
    allowNull: false
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false
  },
  biography: {
    type: DataTypes.TEXT
  },
  photo: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'lecturers',
  timestamps: true  // Esto agrega las columnas createdAt y updatedAt
});

// Definir la relación
Lecturer.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Lecturer, { foreignKey: 'user_id' });

module.exports = Lecturer;
