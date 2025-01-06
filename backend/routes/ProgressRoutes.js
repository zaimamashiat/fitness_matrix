const express = require("express");
const router = express.Router();
const Progress = require("../models/ProgressModel"); // Adjust path as needed
const authenticate = require("../middleware/AuthMiddleware"); // Middleware to verify token

// Add a progress entry
router.post("/", authenticate, async (req, res) => {
    const { weight, height, note } = req.body;

    if (!weight || !height) {
        return res.status(400).json({ message: "Weight and height are required." });
    }

    try {
        const progress = new Progress({
            userId: req.user.id, // Extracted from token in the middleware
            weight,
            height,
            note,
        });

        await progress.save();
        res.status(201).json({ message: "Progress saved successfully.", progress });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error while saving progress." });
    }
});

// Get progress entries for the authenticated user
router.get("/", authenticate, async (req, res) => {
    try {
        const progressEntries = await Progress.find({ userId: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json(progressEntries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error while fetching progress." });
    }
});

module.exports = router;
