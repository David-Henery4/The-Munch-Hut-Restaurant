import { BgImage, CtaText } from "./cta-comps";

const Cta = () => {
  return (
    <section className="w-full col-start-1 col-end-13 text-center px-6 py-16 relative lgMob:py-20 lgMob:px-10 smDesk:py-20 lgDesk:py-32 max-w-[2560px] mx-auto">
      <BgImage/>
      <CtaText/>
    </section>
  );
};

export default Cta;
