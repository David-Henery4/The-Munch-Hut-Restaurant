import { AboutText, AboutImgGrid } from "./about-comps";

const AboutUs = () => {
  return (
    <section className="col-start-2 col-end-12 text-center py-12 flex flex-col gap-10">
      <AboutText/>
      {/****/}

      <AboutImgGrid/>

    </section>
  );
};

export default AboutUs;
