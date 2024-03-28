import { DrinkSelectContainer, DrinkItemsContainer } from "./drinks-section-comps";
import { SecondaryHeader } from "../shared";

const DrinksSection = () => {
  return (
    <section className="col-start-2 col-end-12 pt-7 pb-14 text-center smTab:pt-14 smTab:pb-28">
      <SecondaryHeader>Drinks</SecondaryHeader>

      <DrinkSelectContainer />

      <DrinkItemsContainer />
    </section>
  );
}

export default DrinksSection