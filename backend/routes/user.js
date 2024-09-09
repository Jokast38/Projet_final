const express = require('express');
const { buyStorage } = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/buy-storage', authMiddleware, buyStorage);

module.exports = router;
