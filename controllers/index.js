const auth = require("./auth");
const user = require("./user");
const mealPlan = require("./mealPlan");
const recipes = require("./recipes");


module.exports = {
  auth: require('./auth'),
  user: require('./user'),
  mealPlan: require('./mealPlan'),
  recipes: require('./recipes')
};

