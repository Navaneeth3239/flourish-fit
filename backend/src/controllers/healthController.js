const asyncHandler = require('express-async-handler');
const HealthData = require('../models/HealthData');

// @desc    Get user health data
// @route   GET /api/health
// @access  Private
const getHealthData = asyncHandler(async (req, res) => {
  const data = await HealthData.find({ user: req.user._id }).sort({ date: -1 }).limit(30);
  res.json(data);
});

// @desc    Add health data
// @route   POST /api/health
// @access  Private
const addHealthData = asyncHandler(async (req, res) => {
  const { heartRate, sleepDuration, sleepQuality, stressLevel, date } = req.body;

  const healthData = new HealthData({
    user: req.user._id,
    heartRate,
    sleepDuration,
    sleepQuality,
    stressLevel,
    date: date || Date.now(),
  });

  const createdData = await healthData.save();
  res.status(201).json(createdData);
});

// @desc    Get health insights
// @route   GET /api/health/insights
// @access  Private
const getInsights = asyncHandler(async (req, res) => {
  // Simple rule-based logic for insights
  const latestData = await HealthData.findOne({ user: req.user._id }).sort({ date: -1 });
  let insights = [];

  if (latestData) {
    if (latestData.sleepDuration < 6) {
      insights.push('You had less than 6 hours of sleep. Try to get more rest!');
    } else if (latestData.sleepDuration >= 7) {
      insights.push('Great job! Your sleep duration is optimal.');
    }

    if (latestData.stressLevel > 7) {
      insights.push('Your stress level seems high. Consider some relaxation exercises.');
    }
  } else {
    insights.push('Setup your health data to start receiving insights.');
  }

  res.json({ insights });
});

module.exports = { getHealthData, addHealthData, getInsights };
