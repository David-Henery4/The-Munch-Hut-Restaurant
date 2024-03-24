import { StoryText, StoryImage } from "./story-comps";

const StorySection = () => {
  return (
    <section className="col-start-2 col-end-12 max-w-[1160px] mx-auto py-24 text-center grid gap-16 items-center lap:text-left desk:py-32">
      <StoryText/>
      <StoryImage/>
    </section>
  );
};

export default StorySection;
