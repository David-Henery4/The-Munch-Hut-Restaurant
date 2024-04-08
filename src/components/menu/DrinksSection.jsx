import {
  DrinkItemsContainer,
  DrinkMenuCategories
} from "./drinks-section-comps";
import { SecondaryHeader } from "../shared";

// *[_type == "drink" ]{...category->{drinkCategoryName}}[].drinkCategoryName

const DrinksSection = ({ currentFoodCategory, currentDrinkCategory }) => {
  return (
    <section className="w-full col-start-2 col-end-12 max-w-[1160px] mx-auto pt-7 pb-14 text-center smTab:pt-14 smTab:pb-28">
      <SecondaryHeader>Drinks</SecondaryHeader>

      <div className="mt-12 w-full smTab:grid smTab:grid-cols-drinksContainerTab smTab:items-start smTab:gap-[68px] smTab:justify-between">
        <DrinkMenuCategories
          currentDrinkCategory={currentDrinkCategory}
          currentFoodCategory={currentFoodCategory}
        />

        <DrinkItemsContainer currentDrinkCategory={currentDrinkCategory} />
      </div>
    </section>
  );
};

export default DrinksSection;
