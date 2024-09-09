const multer = require('multer');
const path = require('path');

// Configuration de Multer pour le stockage des fichiers
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../uploads/'); // Répertoire où les fichiers seront stockés
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// Filtrer les fichiers en fonction de leur type
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf|docx/; // Modifier en fonction des types acceptés
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if (extname) {
        cb(null, true);
    } else {
        cb(new Error('Type de fichier non supporté'), false);
    }
};

// Configuration de Multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 } // Limite de taille de fichier à 5 Mo
});

module.exports = upload;
