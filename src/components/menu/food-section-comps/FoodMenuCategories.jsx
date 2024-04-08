import { SelectContainer, FoodCategoriesContainer } from "./food-cat-comps";
import { client } from "../../../../sanity/lib/client";


const FoodMenuCategories = async ({
  currentFoodCategory,
  currentDrinkCategory,
}) => {
  const foodCategoriesList = await client.fetch(
    "array::unique(*[_type == 'food']{...category->{FoodCategoryName}}[].FoodCategoryName)"
  );
  //
  return (
    <>
      <SelectContainer
        foodCategoriesList={foodCategoriesList}
        currentFoodCategory={currentFoodCategory}
      />
      <FoodCategoriesContainer
        foodCategoriesList={foodCategoriesList}
        currentFoodCategory={currentFoodCategory}
        currentDrinkCategory={currentDrinkCategory}
      />
    </>
  );
};

export default FoodMenuCategories;
