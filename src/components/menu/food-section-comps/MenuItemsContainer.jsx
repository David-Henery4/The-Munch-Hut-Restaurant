import MenuItemCard from "../menu-item-card/MenuItemCard";

const MenuItemsContainer = () => {
  return (
    <div className="mt-14 flex flex-wrap justify-center items-center gap-8">
      <MenuItemCard/>
      <MenuItemCard/>
      <MenuItemCard/>
      <MenuItemCard/>
    </div>
  );
};

export default MenuItemsContainer;
