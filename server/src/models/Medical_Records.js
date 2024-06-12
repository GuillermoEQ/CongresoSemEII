const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Medical_Record = sequelize.define('Medical_Records', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    alergies: {
      type: DataTypes.STRING,
      allowNull: false
    },
    food_restrictions: {
      type: DataTypes.STRING,
      allowNull: false
    },
    medicines: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chronic_deseases: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emergency_contact_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    emergency_contact_tel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    observations: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'medical_record', // nombre de la tabla de postgreSQL
    timestamps: false
});

module.exports = Medical_Record;