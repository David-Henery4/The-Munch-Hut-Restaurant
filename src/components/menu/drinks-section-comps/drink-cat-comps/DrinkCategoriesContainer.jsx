// const placeholderDrinkCategries = [
//   {
//     id: 1,
//     label: "Cocktails",
//     category: "cocktails",
//     isActive: true,
//   },
//   {
//     id: 2,
//     label: "Beers",
//     category: "beers",
//     isActive: false,
//   },
//   {
//     id: 3,
//     label: "Wine",
//     category: "wine",
//     isActive: false,
//   },
//   {
//     id: 4,
//     label: "Spirits",
//     category: "spirits",
//     isActive: false,
//   },
//   {
//     id: 5,
//     label: "Water & Soft drinks",
//     category: "water-and-soft-drinks",
//     isActive: false,
//   },
//   {
//     id: 6,
//     label: "Tea & Coffee",
//     category: "tea-and-coffee",
//     isActive: false,
//   },
// ];
import Link from "next/link";
import handleSetSearchParams from "@/helpers/handleSetSearchParams";



// *[_type == "drink" ]{...category->{drinkCategoryName}}[].drinkCategoryName

const DrinkCategoriesContainer = ({
  currentFoodCategory,
  currentDrinkCategory,
  drinkCategoriesList,
}) => {
  //
  const currentCategory =
    currentDrinkCategory === null ? "Tea & Coffee" : currentDrinkCategory;
  //
  return (
    <div className="w-full justify-between items-center hidden text-3xl flex-nowrap flex-col smTab:flex">
      {drinkCategoriesList.map((cat, i) => {
        return (
          <Link
            key={i}
            href={handleSetSearchParams(
              {
                currentName: "foodCat",
                currentValue: currentFoodCategory,
              },
              {
                newName: "drinkCat",
                newValue: `${cat}`,
              }
            )}
            replace
            scroll={false}
            className={`w-full p-6 pl-0 border-b text-left hover:text-gold hover:border-gold first:pt-0 ${
              cat === currentCategory
                ? "border-b-red text-red"
                : "border-b-white"
            }`}
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
};

export default DrinkCategoriesContainer;


  // const result = URLSearchParams.toString()
  // console.log(result)
  // const params = new URL("http://localhost:3000").searchParams;
  // console.log(params.get("drinkCat"));
  // const result = new URLSearchParams()
  // console.log(result.getAll("drinkCat"));
  // ${ cat.isActive ? "border-b-red text-red" : "border-b-white"}