"use client";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/shared/shad-comps/CarouselComps";
import Autoplay from "embla-carousel-autoplay";

const Slider = ({ sliderImages }) => {
  //
  return (
    <>
      <Carousel
        className="static"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <div className="h-full w-full absolute top-0 left-0">
          <CarouselContent className="h-full">
            {sliderImages.map((item, i) => {
              return (
                <CarouselItem key={i}>
                  <Image
                    src={urlForImage(item)}
                    width={1620}
                    height={1620}
                    alt="large cutting board with multiple slices of neatly cut, rare steak"
                    className="h-full w-full object-cover object-center"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </div>
        <div className="col-start-2 col-end-12 relative z-20 max-w-[350px] mx-auto mt-4 mb-16 flex items-center justify-center gap-4 lgMob:mb-24 smTab:mx-0 smLap:max-w-[540px] smLap:mt-8 smLap:mb-32">
          <CarouselDots />
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
