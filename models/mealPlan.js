const connection = require('../config/connection');

class MealPlan {
    
    // Insert a new meal plan into the database
    async addMealPlan(userId, recipeId, recipeName, recipeImageURL, ingredients, instructions) {
        try {
            const result = await connection.query(
                "INSERT INTO MealPlans (userId, recipeId, recipeName, recipeImageURL, ingredients, instructions) VALUES (?, ?, ?, ?, ?, ?)",
                [userId, recipeId, recipeName, recipeImageURL, ingredients, instructions]
            );

            return result.affectedRows ? true : false;

        } catch (error) {
            console.error("Error adding recipe to meal plan:", error);
            throw new Error('Failed to add recipe to meal plan.');
        }
    }

    // Fetch meal plans for a particular user
    async getMealPlansByUser(userId) {
        try {
            const mealPlans = await connection.query(
                "SELECT * FROM MealPlans WHERE userId = ?",
                [userId]
            );

            return mealPlans;

        } catch (error) {
            console.error("Error fetching meal plans:", error);
            throw new Error('Failed to fetch meal plans.');
        }
    }

    // Delete a specific meal plan
    async deleteMealPlan(planId) {
        try {
            const result = await connection.query(
                "DELETE FROM MealPlans WHERE planId = ?",
                [planId]
            );

            return result.affectedRows ? true : false;

        } catch (error) {
            console.error("Error deleting meal plan:", error);
            throw new Error('Failed to delete meal plan.');
        }
    }
}

module.exports = new MealPlan();
