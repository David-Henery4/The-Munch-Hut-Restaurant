import Image from "next/image"

const AboutImgGrid = () => {
  return (
    <div className="max-w-[560px] mx-auto grid grid-cols-basic12 tab:flex-1 tab:max-w-none">
      <Image
        src="/images/home-about/restaurant-empty.jpg"
        width={560}
        height={560}
        alt="A modern, bright, empty restaurant"
        className="col-start-1 col-end-8 row-start-1 row-end-4 w-32 h-32 object-cover z-10 rounded-full border-gold border-8 tab:col-start-8 tab:col-end-13 lgLap:col-start-1 lgLap:col-end-9 lgLap:w-48 lgLap:h-48"
      />
      <Image
        src="/images/home-about/empty-bar.jpg"
        width={620}
        height={620}
        alt="A modern, bright, empty bar"
        className="w-full h-72 object-cover col-start-1 col-end-12 row-start-3 row-end-9 border-l-8 border-b-8 border-l-red border-b-red lgLap:col-end-12 lgLap:h-full"
      />
      <Image
        src="/images/home-about/two-for-one-meals.jpg"
        width={590}
        height={590}
        alt="Four delicious meals around a circle table, shown from above"
        className="w-full h-52 col-start-6 col-end-13 row-start-8 row-end-13 object-cover border-l-8 border-b-8 border-l-gold border-b-gold tab:col-start-2 tab:col-end-9 tab:row-start-7 tab:row-end-13 lgLap:col-start-7 lgLap:col-end-13 lgLap:h-full"
      />
    </div>
  );
}

export default AboutImgGrid