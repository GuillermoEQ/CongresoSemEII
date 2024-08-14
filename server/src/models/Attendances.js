const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Activitie = require('./Activities');
const Register = require('./Registers');

const Attendance = sequelize.define('Attendances', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    mark_attendance: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    // CLAVES FORANEAS [

    register_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Register,
            key: 'id'
        }
    }
    // ]
    }, {
    tableName: 'attendances', // nombre de la tabla de postgreSQL
    timestamps: true
});

// La relación como claves foraneas de atendances

// (una act puede tener muchas asist)
Attendance.belongsTo(Activitie, { foreignKey: 'activity_id' });
Activitie.hasMany(Attendance, { foreignKey: 'activity_id' });

// (un registro puede tener muchas asist)
Attendance.belongsTo(Register, { foreignKey: 'register_id' });
Register.hasMany(Attendance, { foreignKey: 'register_id' });

module.exports = Attendance;