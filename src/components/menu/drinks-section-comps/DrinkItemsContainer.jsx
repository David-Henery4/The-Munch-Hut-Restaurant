import MenuItemCard from "../menu-item-card/MenuItemCard";

const DrinkItemsContainer = () => {
  return (
    <div className="mt-12 py-12 flex flex-wrap justify-center items-center gap-8 border-t border-t-gold smTab:m-0 smTab:border-0 smTab:row-start-1 smTab:row-end-2 smTab:p-0 smTab:text-left smTab:grid smTab:grid-cols-drinksCardsContainerTab">
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
    </div>
  );
}

export default DrinkItemsContainer