const express = require('express');
const router = express.Router();
const { getFoodLogs, addFoodLog } = require('../controllers/nutritionController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getFoodLogs).post(protect, addFoodLog);

module.exports = router;
