const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    steps: {
      type: Number,
      required: true,
      default: 0,
    },
    caloriesBurned: {
      type: Number,
      required: true,
      default: 0,
    },
    distance: { // in km
      type: Number,
      default: 0,
    },
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

activitySchema.index({ user: 1, date: -1 });

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;
