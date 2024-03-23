"use client";
import Image from "next/image";

const Slider = () => {
  // console.log("slider")
  return (
    <>
      <div className="h-full w-full absolute top-0 left-0">
        <Image
          src="/images/home-menu-slider/steak-background.png"
          width={1620}
          height={1620}
          alt="large cutting board with multiple slices of neatly cut, rare steak"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="col-start-2 col-end-12 relative z-20 max-w-[350px] mx-auto mt-4 mb-16 flex items-center justify-center gap-2 lgMob:mb-24 smTab:mx-0 smLap:max-w-[540px] smLap:mt-8 smLap:mb-32">
        <div className="w-6 h-6 rounded-full bg-red border-4 border-black" />
        <div className="w-6 h-6 rounded-full bg-white border-4 border-black" />
        <div className="w-6 h-6 rounded-full bg-white border-4 border-black" />
        <div className="w-6 h-6 rounded-full bg-white border-4 border-black" />
        <div className="w-6 h-6 rounded-full bg-white border-4 border-black" />
        <div className="w-6 h-6 rounded-full bg-white border-4 border-black" />
      </div>
    </>
  );
};

export default Slider;
