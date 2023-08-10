const router = require("express").Router();
const controllers = require("../controllers");
const axios = require('axios'); 

// Home route
router.get("/", ({ session: { isLoggedIn } }, res) => {
  res.render("index", { isLoggedIn });
});

// Recipe routes
router.get("/search", (req, res) => {
  res.render("search");
});

router.post("/recipes", (req, res) => {
  const searchTerm = req.body.searchTerm;
  axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    .then(response => {
      const recipes = response.data.meals;
      res.render("recipes", { recipes });
    })
    .catch(() => {
      res.send("Error fetching recipes");
    });
});

router.post("/add-to-mealplan", async (req, res) => {
  console.log(req.body); 
  try {
      const { recipeId, recipeName, recipeImageURL, ingredients, instructions } = req.body;

      // Use a controller or some function to add the recipe to the meal plan.
      await controllers.mealPlan.add({
          recipeId,
          recipeName,
          recipeImageURL,
          ingredients,
          instructions
      });

      res.redirect('/mealplan');  // Redirecting user to the meal plan page after adding the recipe
  } catch (error) {
      console.error("Error adding recipe to meal plan:", error);
      res.status(500).send('Internal Server Error');
  }
});

router.get("/mealplan", (req, res) => {
const mealPlan = controllers.mealPlan.fetch();
res.render("mealPlan", { meals: mealPlan });
});

module.exports = router;


