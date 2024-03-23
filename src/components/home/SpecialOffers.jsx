import { SecondaryHeader } from "../shared";
import OffersContainer from "./special-offers-comps/OffersContainer";

const SpecialOffers = () => {
  return (
    <section className="col-start-1 col-end-13 py-16 mb-8 text-center lgMob:py-24 tab:text-left smLap:py-32">
      <div className="pl-10 max-w-[1440px] mx-auto lgLap:pl-[105px] desk:pl-[140px]">
        <SecondaryHeader>Special Offers</SecondaryHeader>
      </div>
      <OffersContainer />
    </section>
  );
};

export default SpecialOffers;
