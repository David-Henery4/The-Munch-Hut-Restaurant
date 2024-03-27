import { SecondaryHeader } from "../shared"
import { MenuItemsContainer, SelectContainer } from "./food-section-comps";

const FoodSection = () => {
  return (
    <section className="col-start-2 col-end-12 py-14 text-center">
      <SecondaryHeader>
        We have something for <span className="text-red">everyone</span>
      </SecondaryHeader>
      
      <SelectContainer/>

      <MenuItemsContainer/>
      
    </section>
  );
}

export default FoodSection