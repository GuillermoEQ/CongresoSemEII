const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Activitie = require('./Activities');
const User = require('./Users');

const Register = sequelize.define('Registers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    // CLAVES FORANEAS [
    activity_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Activitie,
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
    }, {
    tableName: 'registers', // nombre de la tabla de postgreSQL
    timestamps: false
});

// La relación como claves foraneas de register

// (una act puede tener muchos registros)
Register.belongsTo(Activitie, { foreignKey: 'activity_id' });
Activitie.hasMany(Register, { foreignKey: 'activity_id' });

// (un usuario puede tener muchos registros)
Register.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Register, { foreignKey: 'user_id' });

module.exports = Register;