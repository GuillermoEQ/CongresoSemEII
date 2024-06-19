const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Essay = sequelize.define('Essays', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // CLAVE FORANEA
    studentId: {
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
    }
    }, {
    tableName: 'essays', // nombre de la tabla de postgreSQL
    timestamps: false
});

// La relación como claves foraneas de Essays
Essay.belongsTo(student, { foreignKey: 'studentId' });
student.hasOne(Essay, { foreignKey: 'studentId' });

module.exports = Essays;