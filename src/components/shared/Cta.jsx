import { BgImage, CtaText } from "./cta-comps";

const Cta = () => {
  return (
    <section className="col-start-1 col-end-13 text-center px-6 py-16 relative lgMob:py-20 lgMob:px-10">
      <BgImage/>
      <CtaText/>
    </section>
  );
};

export default Cta;
