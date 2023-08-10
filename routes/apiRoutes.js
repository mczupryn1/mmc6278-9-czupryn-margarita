const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");
const axios = require('axios');

// Admin login/logout routes
router.post("/login", controllers.auth.login);
router.get("/logout", controllers.auth.logout);
router.post("/signup", controllers.user.create);

// Route to search for recipes using TheMealDB API
router.post('/recipes', async (req, res) => {
    const searchTerm = req.body.searchTerm;

    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);

        if (response.data.meals) {
            res.render('recipeList', { recipes: response.data.meals });
        } else {
            res.render('noResults', { searchTerm: searchTerm });
        }

    } catch (error) {
        console.error("Error fetching data from TheMealDB:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Route to add a recipe to the meal plan
router.post('/add-to-mealplan', controllers.mealPlan.add);

module.exports = router;

