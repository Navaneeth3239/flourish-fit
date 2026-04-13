const express = require('express');
const router = express.Router();
const { getHealthData, addHealthData, getInsights } = require('../controllers/healthController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getHealthData).post(protect, addHealthData);
router.route('/insights').get(protect, getInsights);

module.exports = router;
