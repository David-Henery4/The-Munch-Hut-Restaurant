import { DrinkCategoriesContainer, DrinkSelectContainer } from "./drink-cat-comps";
import { client } from "../../../../sanity/lib/client";

const DrinkMenuCategories = async ({ currentDrinkCategory, currentFoodCategory }) => {
  const drinkCategoriesList = await client.fetch(
    "array::unique(*[_type == 'drink']{...category->{drinkCategoryName}}[].drinkCategoryName)"
  );
  console.log(drinkCategoriesList)
  return (
    <>
      <DrinkSelectContainer />
      <DrinkCategoriesContainer
        currentFoodCategory={currentFoodCategory}
        currentDrinkCategory={currentDrinkCategory}
        drinkCategoriesList={drinkCategoriesList}
      />
    </>
  );
};

export default DrinkMenuCategories