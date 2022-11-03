const Categories = require("./categorys.models");
const Ingredients = require("./ingredients.models");
const Instructions = require("./instructions.models");
const Recipes = require("./recipes.models");
const RecipesIngredients = require("./recipes_ingredients.models");
const Types = require("./types.models");
const Users = require("./user.models");
const UserIngredients = require("./users_ingredients.models");
const UsersRecipes = require("./users_recipes.model");
const initModels = () => {
  //hasmany llave foranea dentro de parentesis
  //belongsto llave foranea en primer parametro

  //Users 1:M Recipes
  Users.hasMany(Recipes);
  Recipes.belongsTo(Users);

  //Users  1:M UserRecipes
  Users.hasMany(UsersRecipes);
  UsersRecipes.belongsTo(Users);

  //Recipes 1:M UserRecipes
  Recipes.hasMany(UsersRecipes);
  UsersRecipes.belongsTo(Recipes);

  //Users 1:M UserIngredients
  Users.hasMany(UserIngredients);
  UserIngredients.belongsTo(Users);

  //Ingredients 1:M UserIngredients
  Ingredients.hasMany(UserIngredients);
  UserIngredients.belongsTo(Ingredients);

  //Recipes 1:M Categories
  Categories.hasMany(Recipes);
  Recipes.belongsTo(Categories);

  //Ingredients M:1 types
  Types.hasMany(Ingredients);
  Ingredients.belongsTo(Types);

  //Recipes 1:M RecipesIngredients
  Recipes.hasMany(RecipesIngredients);
  RecipesIngredients.belongsTo(Recipes);

  //Ingredients 1:M RecipesIngredients
  Ingredients.hasMany(RecipesIngredients);
  RecipesIngredients.belongsTo(Ingredients);

  //Recipes 1:M Instructions
  Recipes.hasMany(Instructions);
  Instructions.belongsTo(Recipes);
};
module.exports = initModels;
