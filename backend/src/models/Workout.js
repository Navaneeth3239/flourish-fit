const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    workoutType: {
      type: String,
      required: true, // e.g., 'Running', 'Cycling', 'Weightlifting'
    },
    duration: {
      type: Number,
      required: true, // in minutes
    },
    caloriesBurned: {
      type: Number,
      required: true,
    },
    gpsRoute: {
      type: [[Number]], // Array of [longitude, latitude] pairs
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

workoutSchema.index({ user: 1, date: -1 });

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;
