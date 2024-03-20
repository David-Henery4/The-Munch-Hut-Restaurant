import { SecondaryHeader } from "../shared"
import { CardContainer } from "./weekly-specials-comps";


const WeeklySpecials = () => {
  return (
    <section className="col-start-2 col-end-12 text-center py-12">
      <SecondaryHeader>This weeks specials</SecondaryHeader>
      <CardContainer/>
    </section>
  );
}

export default WeeklySpecials