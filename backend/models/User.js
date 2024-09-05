const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Connexion MySQL

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
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
    storageLimit: {
        type: DataTypes.INTEGER,
        defaultValue: 20 // En Go
    },
    usedStorage: {
        type: DataTypes.INTEGER,
        defaultValue: 0 // En Go
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user' // 'user' ou 'admin'
    }
});

module.exports = User;
