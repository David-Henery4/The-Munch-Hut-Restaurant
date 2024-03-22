import { AboutText, AboutImgGrid } from "./about-comps";

const AboutUs = () => {
  return (
    <section
      id="home-about"
      className="col-start-2 col-end-12 text-center py-16 flex flex-col gap-10 lgMob:py-24 lgMob:gap-20 tab:flex-row-reverse tab:gap-16 tab:text-left"
    >
      <AboutText />
      {/****/}

      <AboutImgGrid />
    </section>
  );
};

export default AboutUs;
