const express = require("express");
const router = express.Router();
const authenticate = require('../middleware/AuthMiddleware');
const { createOrder, getOrders, getOrderById, deleteOrder } = require("../controllers/OrderController");

// Apply authentication middleware to all routes
// router.use(authenticate);

// Create a new order
router.post("/", authenticate, createOrder);

// Get all orders for the authenticated user
router.get("/",authenticate, getOrders);

// Get a specific order by ID
router.get("/:id", authenticate, getOrderById);

// Delete an order by ID
router.delete("/:id", authenticate, deleteOrder);

module.exports = router;
