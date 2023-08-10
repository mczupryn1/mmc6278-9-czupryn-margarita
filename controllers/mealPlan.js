const express = require('express');
const router = express.Router();

exports.add = async (req, res) => {
    try {
        const { recipeId, recipeName, recipeImageURL, ingredients, instructions } = req.body;

        const result = await connection.query("INSERT INTO MealPlans (recipeId, recipeName, recipeImageURL, ingredients, instructions) VALUES (?, ?, ?, ?, ?)", [recipeId, recipeName, recipeImageURL, ingredients, instructions]);

        if (result.affectedRows) {
            res.redirect('/mealplan');  // Redirecting user to the meal plan page
        } else {
            throw new Error('Failed to add recipe to meal plan.');
        }
    } catch (error) {
        console.error("Error adding recipe to meal plan:", error);
        res.status(500).send('Internal Server Error');
    }
};



