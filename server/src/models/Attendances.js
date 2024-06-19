const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Activitie = require('./Activities');
const Student = require('./Students');

const Attendance = sequelize.define('Attendances', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // CLAVES FORANEAS [
    activityId: {
        type: DataTypes.INTEGER,
        references: {
            model: Activitie,
            key: 'id'
        }
    },
    studentId: {
        type: DataTypes.INTEGER,
        references: {
            model: Students,
            key: 'id'
        }
    },
    // ]
    date: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
    }, {
    tableName: 'attendances', // nombre de la tabla de postgreSQL
    timestamps: false
});

// La relación como claves foraneas de atendances

// (una act puede tener muchas asist)
Attendance.belongsTo(Activitie, { foreignKey: 'activityId' });
Activitie.hasMany(Attendance, { foreignKey: 'activityId' });

// (un estudiante puede tener muchas asist)
Attendance.belongsTo(Student, { foreignKey: 'studentId' });
Student.hasMany(Attendance, { foreignKey: 'studentId' });

module.exports = Attendance;