const express = require("express");
const router = express.Router();
const authenticate = require('../middleware/AuthMiddleware'); // Assuming you have this middleware to authenticate users
const { createProgressLog, getProgressLogs, updateProgressLog } = require("../controllers/ProgressLogController");

// Apply authentication middleware to all routes
// router.use(authenticate);

// Create a new progress log (authentication required)
router.post("/", authenticate, createProgressLog);

// Get all progress logs for a user (authentication required)
router.get("/", authenticate, getProgressLogs);

// Update a progress log (authentication required)
router.put("/:logId", authenticate, updateProgressLog);

module.exports = router;
