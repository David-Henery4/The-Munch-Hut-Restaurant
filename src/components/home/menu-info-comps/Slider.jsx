"use client";
import Image from "next/image";

const Slider = () => {
  // console.log("slider")
  return (
    <>
      <div className="h-full col-start-1 col-end-13 row-start-1 row-end-13">
        <Image
          src="/images/home-menu-slider/steak-background.png"
          width={1620}
          height={1620}
          alt="large cutting board with multiple slices of neatly cut, rare steak"
          className="h-full object-cover object-center"
        />
      </div>
      <div className="col-start-2 col-end-12 row-start-12 row-end-13 max-w-[350px] mx-auto mt-4 mb-16 flex items-center justify-center gap-2 lgMob:mb-24 smTab:mx-0">
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
