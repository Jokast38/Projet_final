const express = require('express');
const { uploadFile } = require('../controllers/fileController');
const upload = require('../middleware/upload'); // Middleware Multer
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/upload', authMiddleware, upload.single('file'), uploadFile);

module.exports = router;
