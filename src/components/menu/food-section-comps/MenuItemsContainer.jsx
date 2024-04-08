import { client } from "../../../../sanity/lib/client";
import MenuItemCard from "../menu-item-card/MenuItemCard";
import { revalidateTag } from "next/cache";

const MenuItemsContainer = async ({ currentFoodCategory }) => {
  const currentCategory =
    currentFoodCategory === null ? "Starters" : currentFoodCategory;
  //
  const currentFoodCategoryItems = await client.fetch(
    `*[_type == "food" && category->.FoodCategoryName == $currentCategory]{foodName,foodDescription, _id}`,
    {
      currentCategory
    },
    {
      next: {
        tags: ["currentFoodCategoryItems"],
      },
    }
  );
  revalidateTag("currentFoodCategoryItems");
  // console.log(currentFoodCategoryItems)
  //
  return (
    <div className="mt-12 flex flex-wrap justify-center items-start gap-8 pt-12 border-t border-t-gold">
      {currentFoodCategoryItems?.map((foodItems) => {
        return (
          <MenuItemCard
            key={foodItems?._id}
            {...foodItems}
            currentCategory={currentCategory}
          />
        );
      })}
    </div>
  );
};

export default MenuItemsContainer;
