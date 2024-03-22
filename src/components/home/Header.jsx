import { HeaderCta, HeaderHeroText } from "./header-comps";

const Header = () => {
  return (
    <header className="col-start-1 col-end-13 px-6 py-24 grid place-items-center bg-hero-pattern bg-cover bg-center bg-no-repeat relative">
      {/* Overlay */}
      <div className="pointer-events-none absolute w-full h-full top-0 left-0 bg-black/50 z-0" />
      <HeaderHeroText />
      <HeaderCta />
    </header>
  );
};

export default Header;
