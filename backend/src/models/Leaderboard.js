const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    score: {
      type: Number,
      default: 0,
    },
    period: {
      type: String,
      enum: ['WEEKLY', 'MONTHLY', 'ALL_TIME'],
      default: 'WEEKLY',
    },
    dateRange: {
      start: Date,
      end: Date,
    },
  },
  {
    timestamps: true,
  }
);

leaderboardSchema.index({ period: 1, score: -1 });

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);
module.exports = Leaderboard;
