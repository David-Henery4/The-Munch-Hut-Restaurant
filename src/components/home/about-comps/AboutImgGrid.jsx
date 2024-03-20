import Image from "next/image"

const AboutImgGrid = () => {
  return (
    <div className="grid grid-cols-basic12">
      <Image
        src="/images/home-about/restaurant-empty.jpg"
        width={260}
        height={260}
        alt="A modern, bright, empty restaurant"
        className="col-start-2 col-end-8 row-start-1 row-end-4 w-32 h-32 object-cover z-10 rounded-full border-gold border-8"
      />
      <Image
        src="/images/home-about/empty-bar.jpg"
        width={420}
        height={420}
        alt="A modern, bright, empty bar"
        className="w-full h-72 object-cover col-start-1 col-end-13 row-start-3 row-end-9 border-l-8 border-b-8 border-l-red border-b-red"
      />
      <Image
        src="/images/home-about/two-for-one-meals.jpg"
        width={390}
        height={390}
        alt="Four delicious meals around a circle table, shown from above"
        className="w-full h-52 col-start-6 col-end-13 row-start-8 row-end-13 object-cover border-l-8 border-b-8 border-l-gold border-b-gold"
      />
    </div>
  );
}

export default AboutImgGrid