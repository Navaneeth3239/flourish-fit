const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    goalType: {
      type: String,
      enum: ['STEPS', 'CALORIES', 'DISTANCE', 'WORKOUTS'],
      required: true,
    },
    goalValue: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Challenge = mongoose.model('Challenge', challengeSchema);
module.exports = Challenge;
