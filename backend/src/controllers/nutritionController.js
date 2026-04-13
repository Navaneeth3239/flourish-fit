const asyncHandler = require('express-async-handler');
const FoodLog = require('../models/FoodLog');

// @desc    Get user food logs
// @route   GET /api/nutrition
// @access  Private
const getFoodLogs = asyncHandler(async (req, res) => {
  const logs = await FoodLog.find({ user: req.user._id }).sort({ date: -1 });
  res.json(logs);
});

// @desc    Add food log
// @route   POST /api/nutrition
// @access  Private
const addFoodLog = asyncHandler(async (req, res) => {
  const { mealType, foodItem, calories, protein, carbs, fats, date } = req.body;

  const foodLog = new FoodLog({
    user: req.user._id,
    mealType,
    foodItem,
    calories,
    protein,
    carbs,
    fats,
    date: date || Date.now(),
  });

  const createdLog = await foodLog.save();
  res.status(201).json(createdLog);
});

module.exports = { getFoodLogs, addFoodLog };
