export const dynamic = "force-static";
import { StorySection, TeamSection } from "@/components/about";
import { Cta } from "@/components/shared";

const About = () => {
  return (
    <main className="w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk">
      <StorySection />
      <TeamSection />
      <Cta />
    </main>
  );
};

export default About;
