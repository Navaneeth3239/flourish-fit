const express = require('express');
const router = express.Router();
const { syncSensorData } = require('../controllers/sensorController');
const { protect } = require('../middleware/authMiddleware');

router.route('/sync').post(protect, syncSensorData);

module.exports = router;
