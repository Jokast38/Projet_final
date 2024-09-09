const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const File = sequelize.define('File', {
    file_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    file_path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    file_size: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    uploaded_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

File.belongsTo(User); // Relation Many-to-One entre File et User
module.exports = File;
