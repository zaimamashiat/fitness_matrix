// controllers/recipeController.js
const Recipe = require('../models/RecipeModel');

// Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipes', error });
    }
};

// Create a new recipe
exports.createRecipe = async (req, res) => {
    const { imgSrc, altText, title, description } = req.body;

    const newRecipe = new Recipe({
        imgSrc,
        altText,
        title,
        description
    });

    try {
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        res.status(400).json({ message: 'Error saving recipe', error });
    }
};
