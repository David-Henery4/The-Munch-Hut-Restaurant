import { SecondaryHeader } from "../shared";
import OffersContainer from "./special-offers-comps/OffersContainer";

const SpecialOffers = () => {
  return (
    <section className="col-start-1 col-end-13 py-16 mb-8 text-center lgMob:py-24">
      <SecondaryHeader>Special Offers</SecondaryHeader>
      <OffersContainer />
    </section>
  );
};

export default SpecialOffers;
