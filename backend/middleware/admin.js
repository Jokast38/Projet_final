const User = require('../models/User');

const adminMiddleware = async (req, res, next) => {
    const user = await User.findByPk(req.userId);
    if (user && user.role === 'admin') {
        next();
    } else {
        res.status(403).send('Access denied. Admins only.');
    }
};

module.exports = adminMiddleware;
