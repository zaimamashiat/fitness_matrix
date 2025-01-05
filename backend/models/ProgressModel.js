const mongoose = require('mongoose');

const progressLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  notes: { type: String, default: '' },
  otherMeasurements: {
    chest: { type: Number, default: 0 },
    waist: { type: Number, default: 0 },
    hips: { type: Number, default: 0 },
    arms: { type: Number, default: 0 },
    legs: { type: Number, default: 0 }
  }
});

const ProgressLog = mongoose.model('ProgressLog', progressLogSchema);

module.exports = ProgressLog;
