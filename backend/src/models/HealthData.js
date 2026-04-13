const mongoose = require('mongoose');

const healthDataSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    heartRate: {
      type: Number, // bpm
    },
    sleepDuration: {
      type: Number, // hours
    },
    sleepQuality: {
      type: String, // 'Poor', 'Average', 'Good', 'Excellent'
    },
    stressLevel: {
      type: Number, // 1 to 10
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

healthDataSchema.index({ user: 1, date: -1 });

const HealthData = mongoose.model('HealthData', healthDataSchema);
module.exports = HealthData;
