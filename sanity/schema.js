import about from "./schemas/about"
import menu from "./schemas/menu"
import mainCategories from "./schemas/mainCategories"
import foodCategories from "./schemas/foodCategories"
import drinkCategories from "./schemas/drinkCategories"
import siteSettings from "./schemas/siteSettings"
import colors from "./schemas/colors"
import mainNavigation from "./schemas/mainNavigation"


export const schema = {
  types: [about, menu, mainCategories, foodCategories, drinkCategories, siteSettings, colors, mainNavigation],
}
