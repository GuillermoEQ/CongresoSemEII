const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');


const Student = sequelize.define('Students', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
    }, {
    tableName: 'students', // nombre de la tabla de postgreSQL
    timestamps: false
});

module.exports = Student;