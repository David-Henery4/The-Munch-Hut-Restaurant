"use client";
import Image from "next/image";

const Slider = () => {
  // console.log("slider")
  return (
    <>
      <div className="h-full col-start-1 col-end-13 row-start-1 row-end-13">
        <Image
          src="/images/home-menu-slider/steak-background.png"
          width={1020}
          height={1020}
          alt="large cutting board with multiple slices of neatly cut, rare steak"
          className="h-full object-cover object-center"
        />
      </div>
      <div className="col-start-2 col-end-12 row-start-12 row-end-13 my-4">
        Dots
      </div>
    </>
  );
};

export default Slider;
