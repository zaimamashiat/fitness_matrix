// models/recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  altText: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
