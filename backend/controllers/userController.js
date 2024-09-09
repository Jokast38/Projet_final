exports.buyStorage = async (req, res) => {
    try {
        const user = await User.findByPk(req.userId);
        user.storageLimit += 20; // Ajout de 20 Go
        await user.save();
        res.send('Storage limit increased');
    } catch (err) {
        res.status(400).send('Error: ' + err.message);
    }
};
