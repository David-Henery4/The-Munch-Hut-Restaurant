import { BodyText } from "@/components/shared";

const MenuItemCard = () => {
  return (
    <div>
      <h3 className="font-pompiere text-3xl mb-2">Cheese Plate</h3>
      <div className="max-w-[325px] mx-auto">
        <BodyText>
          Assortment of cheeses such as brie, cheddar, and gouda, served with
          crackers, grapes, and honey.
        </BodyText>
      </div>
    </div>
  );
};

export default MenuItemCard;
