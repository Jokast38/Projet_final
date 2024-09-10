const File = require('../models/File');
const User = require('../models/User');
const { sendEmail } = require('../services/mailService');


exports.uploadFile = async (req, res) => {
    try {
        const file = await File.create({
            file_name: req.file.filename,
            file_size: req.file.size,
            file_path: req.file.path,
            UserId: req.userId // Associer le fichier à l'utilisateur connecté
        });

        const user = await User.findByPk(req.userId);
        user.usedStorage += req.file.size / (1024 * 1024); // Convertir en Mo
        await user.save();
        await sendEmail('Votre Fichier est bien enregistré');

        res.status(201).send('File uploaded');
    } catch (err) {
        res.status(400).send('Error: ' + err.message);
    }
};
