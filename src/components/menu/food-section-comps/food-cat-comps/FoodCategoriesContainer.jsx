import Link from "next/link";


const FoodCategoriesContainer = ({
  foodCategoriesList,
  currentFoodCategory,
}) => {
  const currentCategory =
    currentFoodCategory === null ? "Starters" : currentFoodCategory;
  //
  return (
    <div className="w-full flex-wrap justify-center items-center gap-8 mt-12 max-w-[840px] mx-auto hidden smTab:flex">
      {foodCategoriesList.map((cat, i) => {
        return (
          <Link
            href={{
              query: {
                foodCat: `${cat}`,
              },
            }}
            key={i}
            replace
            scroll={false}
            className={`${cat === currentCategory  ? "border-b border-b-red" : null}`} // temp removed
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
};

export default FoodCategoriesContainer;
