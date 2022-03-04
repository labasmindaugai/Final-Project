const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const {
  getSections, createSection, updateSection, deleteSection
} = require('../controllers/section-controller');
const adminMiddleware = require('../middlewares/admin-middleware');

const router = express.Router();

// middlewares
router.use(authMiddleware, adminMiddleware);

router.get('/', getSections);
router.post('/create',createSection);
router.patch('/update',updateSection);
router.delete('/delete',deleteSection);

module.exports = router;
