import { BodyText } from "@/components/shared";

const MenuItemCard = ({ foodName, foodDescription }) => {
  return (
    <div className="smTab:text-left">
      <h3 className="font-pompiere text-3xl mb-2">{foodName}</h3>
      <div className="max-w-[290px] mx-auto smTab:m-0">
        <BodyText>{foodDescription}</BodyText>
      </div>
    </div>
  );
};

export default MenuItemCard;
