const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // Extracted from the token
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    note: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Progress", ProgressSchema);
