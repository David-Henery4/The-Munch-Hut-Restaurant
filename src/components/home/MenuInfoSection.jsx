import { MenuInfoCard, Slider } from "./menu-info-comps";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shared/shad-comps/CarouselComps";

const MenuInfoSection = () => {
  return (
    <section className="w-full relative col-start-1 col-end-13 grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk max-w-[2560px] mx-auto">
      <div className="w-full col-start-2 col-end-12 max-w-[1160px] mx-auto">
        <MenuInfoCard />
        <Slider />
      </div>      
    </section>
  );
};

export default MenuInfoSection;
