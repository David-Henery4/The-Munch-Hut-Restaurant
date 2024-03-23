import { StoryText, StoryImage } from "./story-comps";

const StorySection = () => {
  return (
    <section className="col-start-2 col-end-12 py-12 text-center">
      <StoryText/>
      <StoryImage/>
    </section>
  );
};

export default StorySection;
