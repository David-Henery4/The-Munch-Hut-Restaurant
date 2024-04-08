import MenuItemCard from "../menu-item-card/MenuItemCard";
import { client } from "../../../../sanity/lib/client";
import { revalidateTag } from "next/cache";

const DrinkItemsContainer = async ({ currentDrinkCategory }) => {
  // "Tea & Coffee" = might have to change not secure enough
  const currentCategory =
    currentDrinkCategory === null ? "Tea & Coffee" : currentDrinkCategory;
  //
  const currentDrinkCategoryItems = await client.fetch(
    "*[_type == 'drink' && category->.drinkCategoryName == $currentCategory]{_id, drinkName, drinkDescription}",
    { currentCategory },
    { next: { tags: "currentDrinkCategoryItems" } }
  );
  revalidateTag("currentDrinkCategoryItems");
  //
  return (
    <div className="mt-12 py-12 flex flex-wrap justify-center items-start gap-8 border-t border-t-gold smTab:m-0 smTab:border-0 smTab:row-start-1 smTab:row-end-2 smTab:p-0 smTab:text-left smTab:grid smTab:grid-cols-drinksCardsContainerTab">
      {currentDrinkCategoryItems.map((drinkItems) => {
        return (
          <MenuItemCard
            key={drinkItems?._id}
            itemDescription={drinkItems?.drinkDescription}
            itemName={drinkItems?.drinkName}
          />
        );
      })}
    </div>
  );
};

export default DrinkItemsContainer;
