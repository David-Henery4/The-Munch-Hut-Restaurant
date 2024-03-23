import { SecondaryHeader } from "../shared"
import { CardContainer } from "./weekly-specials-comps";


const WeeklySpecials = () => {
  return (
    <section className="w-full col-start-2 col-end-12 text-center py-16 max-w-[1160px] mx-auto lgMob:py-24 smLap:py-32">
      <SecondaryHeader>This weeks specials</SecondaryHeader>
      <CardContainer />
    </section>
  );
}

export default WeeklySpecials