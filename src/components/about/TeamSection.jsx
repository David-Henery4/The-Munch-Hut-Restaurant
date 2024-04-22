import { SecondaryHeader } from "../shared";
import TeamGrid from "./team-comps/TeamGrid";

const TeamSection = () => {
  return (
    <section className="col-start-2 col-end-12 py-16 text-center desk:py-20">
      <SecondaryHeader>The Team</SecondaryHeader>
      <TeamGrid/>
    </section>
  );
};

export default TeamSection;
