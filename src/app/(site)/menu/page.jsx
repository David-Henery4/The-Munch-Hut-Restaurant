import { FoodSection, DrinksSection, MenuHeader } from "@/components/menu";
import { Cta } from "@/components/shared";

const MenuPage = ({ searchParams }) => {
  console.log(`:`, searchParams)
  return (
    <main className="w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk">
      <MenuHeader />
      <FoodSection
        currentFoodCategory={searchParams?.foodCat || null}
        currentDrinkCategory={searchParams?.drinkCat || null}
      />
      <DrinksSection
        currentFoodCategory={searchParams?.foodCat || null}
        currentDrinkCategory={searchParams?.drinkCat || null}
      />
      <Cta />
    </main>
  );
};

export default MenuPage;
