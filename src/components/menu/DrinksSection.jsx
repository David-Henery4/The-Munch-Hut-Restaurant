import { DrinkSelectContainer, DrinkItemsContainer } from "./drinks-section-comps";
import { SecondaryHeader } from "../shared";

const DrinksSection = () => {
  return (
    <section className="col-start-2 col-end-12 py-14 text-center">
      <SecondaryHeader>Drinks</SecondaryHeader>

      <DrinkSelectContainer/>

      <DrinkItemsContainer/>

    </section>
  );
}

export default DrinksSection