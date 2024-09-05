const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const File = sequelize.define('File', {
    fileName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fileSize: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    uploadDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

File.belongsTo(User); // Relation Many-to-One entre File et User
module.exports = File;
