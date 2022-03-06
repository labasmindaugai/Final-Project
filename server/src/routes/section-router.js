const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const {
  getSections, createSection, updateSection, deleteSection
} = require('../controllers/section-controller');
const adminMiddleware = require('../middlewares/admin-middleware');
const { uploadSingleMiddleware } = require('../middlewares/upload-middleware');

const router = express.Router();

router.get('/', getSections);
router.post('/create', authMiddleware, adminMiddleware, uploadSingleMiddleware('files'), createSection);
router.patch('/update', authMiddleware, adminMiddleware,  uploadSingleMiddleware('files'), updateSection);
router.delete('/delete',deleteSection);

module.exports = router;
