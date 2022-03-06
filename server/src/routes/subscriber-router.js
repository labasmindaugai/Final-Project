const express = require('express');

const {
  createSubscribers,
  getSubscribers,
} = require('../controllers/subscriber-controller');

const router = express.Router();

router.get('/', getSubscribers);

router.post('/subscribe', createSubscribers);

module.exports = router;

