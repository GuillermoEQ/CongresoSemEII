const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Students = require('./Students');

const Essay = sequelize.define('Essays', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // CLAVE FORANEA
    student_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Students,
            key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    summary_date: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    complete_date: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
    }, {
    tableName: 'essays', // nombre de la tabla de postgreSQL
    timestamps: false
});

// La relación como claves foraneas de Essays
Essay.belongsTo(Students, { foreignKey: 'student_id' });
Students.hasOne(Essay, { foreignKey: 'student_id' });

module.exports = Essay;