import { FoodSection, DrinksSection, MenuHeader } from "@/components/menu";
import { Cta } from "@/components/shared";

const MenuPage = () => {
  return (
    <main className="w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk">
      <MenuHeader/>
      <FoodSection />
      <DrinksSection />
      <Cta />
    </main>
  );
};

export default MenuPage;
