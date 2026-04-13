const asyncHandler = require('express-async-handler');
const Activity = require('../models/Activity');

// @desc    Get user activities
// @route   GET /api/activities
// @access  Private
const getActivities = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Activity.countDocuments({ user: req.user._id });
  const activities = await Activity.find({ user: req.user._id })
    .sort({ date: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ activities, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Add new activity
// @route   POST /api/activities
// @access  Private
const addActivity = asyncHandler(async (req, res) => {
  const { steps, caloriesBurned, distance, date } = req.body;

  const activity = new Activity({
    user: req.user._id,
    steps,
    caloriesBurned,
    distance,
    date: date || Date.now(),
  });

  const createdActivity = await activity.save();
  res.status(201).json(createdActivity);
});

module.exports = { getActivities, addActivity };
