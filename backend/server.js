const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require('./routes/UserRoutes');
const mealRoutes = require('./routes/MealRoutes');
const productRoutes = require('./routes/ProductRoutes');
const orderRoutes = require("./routes/OrderRoutes");
const recipeRoutes = require("./routes/RecipeRoutes");
const progressLogRoutes = require('./routes/ProgressLogRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Database connection
mongoose.connect(process.env.MONGO_URI).then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

// Import routes
// const userRoutes = require("./routes/userRoutes");

// Routes
app.use('/api/users', userRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/product', productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/progress", progressLogRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
