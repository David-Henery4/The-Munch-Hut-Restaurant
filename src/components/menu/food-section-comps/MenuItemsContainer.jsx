import MenuItemCard from "../menu-item-card/MenuItemCard";

const MenuItemsContainer = () => {
  return (
    <div className="mt-12 flex flex-wrap justify-center items-center gap-8 pt-12 border-t border-t-gold">
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
      <MenuItemCard />
    </div>
  );
};

export default MenuItemsContainer;
