const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    sensorType: {
      type: String,
      enum: ['ACCELEROMETER', 'GYROSCOPE', 'HEART_RATE', 'PEDOMETER', 'GPS'],
      required: true,
    },
    readings: [
      {
        value: mongoose.Schema.Types.Mixed, // e.g., steps directly, or { x, y, z } for accelerometer
        timestamp: { type: Date, required: true },
      },
    ],
    batchStartTime: {
      type: Date,
    },
    batchEndTime: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

sensorDataSchema.index({ user: 1, sensorType: 1, batchStartTime: -1 });

const SensorData = mongoose.model('SensorData', sensorDataSchema);
module.exports = SensorData;
