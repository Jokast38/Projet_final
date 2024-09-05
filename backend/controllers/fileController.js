const File = require('../models/File');
const User = require('../models/User');

exports.uploadFile = async (req, res) => {
    try {
        const file = await File.create({
            fileName: req.file.filename,
            fileSize: req.file.size,
            UserId: req.userId // Associer le fichier à l'utilisateur connecté
        });

        const user = await User.findByPk(req.userId);
        user.usedStorage += req.file.size / (1024 * 1024); // Convertir en Mo
        await user.save();

        res.status(201).send('File uploaded');
    } catch (err) {
        res.status(400).send('Error: ' + err.message);
    }
};
