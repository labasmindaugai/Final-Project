const express = require('express');
// const adminMiddleware = require('../middlewares/admin-middleware');
// const authMiddleware = require('../middlewares/auth-middleware');

const {
  createSubscribers,
  getSubscribers,
} = require('../controllers/subscriber-controller');

const router = express.Router();

// router.use(authMiddleware, adminMiddleware);

router.get('/', getSubscribers);

router.post('/subscribe', createSubscribers);

module.exports = router;

