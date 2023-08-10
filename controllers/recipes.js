const express = require('express');
const router = express.Router();
const axios = require('axios');
const { MealPlan } = require('../models');

// Fetch recipes based on some criteria (not shown here)
router.get('/recipes', async (req, res) => {
    try {
        // This is just a placeholder. Your actual API call might be different.
        const response = await axios.get(`YOUR_API_ENDPOINT`);
        const recipes = response.data.meals;
        res.render('recipes', { recipes });
    } catch (error) {
        res.send('Error fetching recipes');
    }
});

// Add a recipe to the MealPlan
router.post('/add-to-mealplan', async (req, res) => {
    try {
        const newMeal = await MealPlan.create({
            userId: req.session.userId,  // This assumes you're storing userId in session
            recipeId: req.body.recipeId,
            recipeName: req.body.recipeName,
            recipeImageURL: req.body.recipeImageURL,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions
        });

        res.redirect('/some-success-page');  // Redirect to a page after adding
    } catch (error) {
        console.error("Error adding recipe to meal plan:", error);
        res.status(500).send('Error adding to meal plan');
    }
    
});

module.exports = router;
