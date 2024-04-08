import { SecondaryHeader } from "../shared";
import { MenuItemsContainer, FoodMenuCategories } from "./food-section-comps";



const FoodSection = ({ currentFoodCategory, currentDrinkCategory }) => {
  // console.log("currentFoodCategory", currentFoodCategory);
  return (
    <section className="col-start-2 col-end-12 max-w-[1160px] mx-auto py-14 text-center smTab:py-28">
      <SecondaryHeader>
        We have something for <span className="text-red">everyone</span>
      </SecondaryHeader>

      <FoodMenuCategories
        currentFoodCategory={currentFoodCategory}
        currentDrinkCategory={currentDrinkCategory}
      />

      <MenuItemsContainer currentFoodCategory={currentFoodCategory} />
    </section>
  );
};

export default FoodSection;
