import Link from "next/link";
import handleSetSearchParams from "@/helpers/handleSetSearchParams";

const FoodCategoriesContainer = ({
  foodCategoriesList,
  currentFoodCategory,
  currentDrinkCategory,
}) => {
  const currentCategory =
    currentFoodCategory === null ? "Starters" : currentFoodCategory;
  //
  return (
    <div className="w-full flex-wrap justify-center items-center gap-8 mt-12 max-w-[840px] mx-auto hidden smTab:flex">
      {foodCategoriesList.map((cat, i) => {
        return (
          <Link
            href={handleSetSearchParams(
              {
                currentName: "drinkCat",
                currentValue: currentDrinkCategory,
              },
              { newName: "foodCat", newValue: `${cat}` }
            )}
            key={i}
            replace
            scroll={false}
            className={`${
              cat === currentCategory ? "border-b border-b-red" : null
            }`} // temp removed
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
};

export default FoodCategoriesContainer;
