const connection = require('../config/connection');

exports.add = async (req, res) => {
    try {
        const userId = req.session.userId;

        // Debugging line to log the value of userId
        console.log("User ID:", userId);

        const { recipeId, recipeName, recipeImageURL, ingredients, instructions } = req.body;

        const result = await connection.query("INSERT INTO MealPlans (userId, recipeId, recipeName, recipeImageURL, ingredients, instructions) VALUES (?, ?, ?, ?, ?, ?)", [userId, recipeId, recipeName, recipeImageURL, ingredients, instructions]);

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



