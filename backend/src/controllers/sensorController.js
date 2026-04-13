const asyncHandler = require('express-async-handler');
const SensorData = require('../models/SensorData');
const Activity = require('../models/Activity');

// @desc    Sync batched sensor data from mobile device
// @route   POST /api/sensors/sync
// @access  Private
const syncSensorData = asyncHandler(async (req, res) => {
  const { sensorType, readings, batchStartTime, batchEndTime } = req.body;

  if (!readings || readings.length === 0) {
    res.status(400);
    throw new Error('No sensor readings provided');
  }

  // Store the raw batch
  const sensorBatch = new SensorData({
    user: req.user._id,
    sensorType,
    readings,
    batchStartTime,
    batchEndTime,
  });

  await sensorBatch.save();

  // Process data if necessary to update aggregate models like Activity
  // E.g., if it's the PEDOMETER, update today's steps in the Activity model
  if (sensorType === 'PEDOMETER') {
    // A simple aggregation logic: just take the max value or the sum of differences
    const latestReading = readings[readings.length - 1];
    if (latestReading && latestReading.value) {
      // Create or update today's activity
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      let todayActivity = await Activity.findOne({
        user: req.user._id,
        date: { $gte: startOfDay, $lte: endOfDay },
      });

      if (!todayActivity) {
        todayActivity = new Activity({
          user: req.user._id,
          steps: latestReading.value,
          date: new Date(),
        });
      } else {
        // Adjust logic depending on whether sensor resets everyday or sends total
        todayActivity.steps = Math.max(todayActivity.steps, latestReading.value);
      }

      await todayActivity.save();
    }
  }

  res.status(201).json({ message: 'Sensor data synced successfully' });
});

module.exports = { syncSensorData };
