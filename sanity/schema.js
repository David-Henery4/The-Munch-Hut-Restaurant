import about from "./schemas/about";
import menu from "./schemas/menu";
import mainCategories from "./schemas/mainCategories";
import foodCategories from "./schemas/foodCategories";
import drinkCategories from "./schemas/drinkCategories";
import drink from "./schemas/drink";
import food from "./schemas/food";
import specials from "./schemas/specials";
import homeMenuDescription from "./schemas/homeMenuDescription";
import offers from "./schemas/offers";

export const schema = {
  types: [
    about,
    homeMenuDescription,
    menu,
    mainCategories,
    foodCategories,
    drinkCategories,
    drink,
    food,
    specials,
    offers
  ],
};
