const ProgressLog = require('../models/ProgressModel');
const User = require('../models/UserModel');  // Assuming the User model exists

// Create a new progress log
exports.createProgressLog = async (req, res) => {
  const { weight, height, notes, otherMeasurements } = req.body;
  const { userId } = req.user.userId;

  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newProgressLog = new ProgressLog({
      userId,
      weight,
      height,
      notes,
      otherMeasurements
    });

    await newProgressLog.save();
    res.status(201).json({ message: 'Progress log created successfully', newProgressLog });
  } catch (error) {
    res.status(500).json({ message: 'Error creating progress log', error });
  }
};

// Get all progress logs for a user
exports.getProgressLogs = async (req, res) => {
  const { userId } = req.user.userId;

  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const progressLogs = await ProgressLog.find({ userId }).sort({ date: -1 });
    res.status(200).json(progressLogs);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving progress logs', error });
  }
};

// Update a progress log
exports.updateProgressLog = async (req, res) => {
  const { logId } = req.params;
  const { weight, height, notes, otherMeasurements } = req.body;

  try {
    // Check if the progress log exists
    const progressLog = await ProgressLog.findById(logId);
    if (!progressLog) {
      return res.status(404).json({ message: 'Progress log not found' });
    }

    const updatedProgressLog = await ProgressLog.findByIdAndUpdate(logId, {
      weight,
      height,
      notes,
      otherMeasurements
    }, { new: true });

    res.status(200).json({ message: 'Progress log updated successfully', updatedProgressLog });
  } catch (error) {
    res.status(500).json({ message: 'Error updating progress log', error });
  }
};
