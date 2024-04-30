const mysql = require('mysql');
const mysql = require('mysql');
require('dotenv').config();


// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Établissement de la connexion à la base de données
connection.connect((err) => {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données :', err);
        return;
    }
    console.log('Connexion à la base de données réussie.');
});

// Export de la connexion pour l'utiliser dans d'autres fichiers
module.exports = connection;
