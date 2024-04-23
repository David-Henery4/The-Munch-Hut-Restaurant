"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/shared/shad-comps/CarouselComps";
import Autoplay from "embla-carousel-autoplay";

const Slider = () => {
  // console.log("slider")
  return (
    <>
      <Carousel
        className="static"
        opts={{
          loop: true
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <div className="h-full w-full absolute top-0 left-0">
          <CarouselContent className="h-full">
            <CarouselItem>
              <Image
                src="/images/home-menu-slider/steak-background.png"
                width={1620}
                height={1620}
                alt="large cutting board with multiple slices of neatly cut, rare steak"
                className="h-full w-full object-cover object-center"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/images/home-menu-slider/steak-background.png"
                width={1620}
                height={1620}
                alt="large cutting board with multiple slices of neatly cut, rare steak"
                className="h-full w-full object-cover object-center"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/images/home-menu-slider/steak-background.png"
                width={1620}
                height={1620}
                alt="large cutting board with multiple slices of neatly cut, rare steak"
                className="h-full w-full object-cover object-center"
              />
            </CarouselItem>
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </div>
        <div className="col-start-2 col-end-12 relative z-20 max-w-[350px] mx-auto mt-4 mb-16 flex items-center justify-center gap-8 lgMob:mb-24 smTab:mx-0 smLap:max-w-[540px] smLap:mt-8 smLap:mb-32">
          <CarouselDots />
          {/* <div className="w-6 h-6 rounded-full bg-red border-4 border-black" />
          <div className="w-6 h-6 rounded-full bg-white border-4 border-black" />
          <div className="w-6 h-6 rounded-full bg-white border-4 border-black" />
          <div className="w-6 h-6 rounded-full bg-white border-4 border-black" />
          <div className="w-6 h-6 rounded-full bg-white border-4 border-black" />
          <div className="w-6 h-6 rounded-full bg-white border-4 border-black" /> */}
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
