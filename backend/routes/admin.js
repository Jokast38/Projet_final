const express = require('express');
const { getStats } = require('../controllers/adminController');
const authMiddleware = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');
const router = express.Router();

// Seuls les admins peuvent accéder aux statistiques
router.get('/stats', authMiddleware, adminMiddleware, getStats);

module.exports = router;
