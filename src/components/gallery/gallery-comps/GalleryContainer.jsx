import GalleryImage from "./gallery-image/GalleryImage";

const tempImgRay = [
  "/images/gallery/gallery-img-1.jpg",
  "/images/gallery/gallery-img-6.jpg",
  "/images/gallery/gallery-img-8.jpg",
  "/images/gallery/gallery-img-4.jpg",
  "/images/gallery/gallery-img-3.jpg",
  "/images/gallery/gallery-img-7.jpg",
  "/images/gallery/gallery-img-2.jpg",
  "/images/gallery/gallery-img-5.jpg",
  "/images/gallery/gallery-img-5.jpg",
  "/images/gallery/gallery-img-5.jpg",
];

const newNum = (n) => {
  console.log(n)
  console.log(`${n}: `, n % 5);
  if (n % 5 === 0 ) {
    
  }
}

const GalleryContainer = () => {
  return (
    // className="col-start-2 col-end-[-1]"
    <div className="w-full mt-12 grid gap-6 XtraSmTab:grid-cols-basic12">
      {tempImgRay.map((img, i) => {
        const isEven = (i + 1) % 2 === 0
        const result = newNum(i + 1)
        // console.log(`${i + 1}: `, isEven);
        if (!isEven) {
          console.log("Odd:",i + 1);
          return <GalleryImage key={i} imgSrc={img} />;
        }
        console.log("Odd:", (i + 1) - 1);
        return <GalleryImage key={i} imgSrc={img} />;
      })}
    </div>
  );
};

export default GalleryContainer;
