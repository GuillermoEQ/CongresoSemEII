const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Users = require('./Users');

const Staff = sequelize.define('Staffs', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    role: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    // CLAVE FORANEA
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'id'
        }
    }
    }, {
    tableName: 'staffs', // nombre de la tabla de postgreSQL
    timestamps: false
});

// La relación como claves foraneas de staffs
Staff.belongsTo(Users, { foreignKey: 'user_id' });
Users.hasOne(Staff, { foreignKey: 'user_id' });

module.exports = Staff;