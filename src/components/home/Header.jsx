import { HeaderCta, HeaderHeroText } from "./header-comps";
import { ChevDownIcon } from "../../../public/assets";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full col-start-1 col-end-13 px-6 py-24 grid place-items-center bg-hero-pattern bg-cover bg-center bg-no-repeat relative smLap:py-28 max-w-[2560px] mx-auto">
      {/* Overlay */}
      <div className="pointer-events-none absolute w-full h-full top-0 left-0 bg-black/50 z-0" />

      <HeaderHeroText />
      <HeaderCta />

      {/* ChevIcon */}
      <div className="z-10 mt-8 lgMob:mt-12 hover:scale-125 transition-all">
        <Link href="#home-about">
          <ChevDownIcon className="fill-white transition-all hover:fill-red" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
