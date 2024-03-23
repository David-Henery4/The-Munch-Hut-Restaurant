import { StorySection, TeamSection } from "@/components/about";

const About = () => {
  return (
    <main className="w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk">
      <StorySection/>
      <TeamSection/>
    </main>
  );
}

export default About