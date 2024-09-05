const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Hashage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        res.status(201).send('User registered');
    } catch (err) {
        res.status(400).send('Error: ' + err.message);
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).send('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(400).send('Error: ' + err.message);
    }
};
