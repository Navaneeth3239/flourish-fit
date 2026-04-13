const mongoose = require('mongoose');

const foodLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    mealType: {
      type: String,
      enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
      required: true,
    },
    foodItem: {
      type: String,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    protein: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
    fats: { type: Number, default: 0 },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

foodLogSchema.index({ user: 1, date: -1 });

const FoodLog = mongoose.model('FoodLog', foodLogSchema);
module.exports = FoodLog;
