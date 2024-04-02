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
  "/images/gallery/gallery-img-5.jpg",
  "/images/gallery/gallery-img-5.jpg",
  "/images/gallery/gallery-img-5.jpg",
];

const leftCol = (n) => {
  if (n % 5 === 1) {
    return "col-start-1 col-end-6";
  }
  if (n % 5 === 2) {
    return "col-start-1 col-end-5";
  }
  if (n % 5 === 3) {
    return "col-start-1 col-end-8";
  }
  if (n % 5 === 4) {
    return "col-start-1 col-end-9";
  }
  if (n % 5 === 0) {
    return "col-start-1 col-end-7";
  }
};
const rightCol = (n) => {
  if (n % 5 === 1) {
    return "col-start-6 col-end-[-1]";
  }
  if (n % 5 === 2) {
    return "col-start-5 col-end-[-1]";
  }
  if (n % 5 === 3) {
    return "col-start-8 col-end-[-1]";
  }
  if (n % 5 === 4) {
    return "col-start-9 col-end-[-1]";
  }
  if (n % 5 === 0) {
    return "col-start-7 col-end-[-1]";
  }
};

const GalleryContainer = () => {
  return (
    <div className="w-full mt-12 grid gap-6 XtraSmTab:grid-cols-basic12">
      {tempImgRay.map((img, i) => {
        const isEven = (i + 1) % 2 === 0;
        if (!isEven) {
          return <GalleryImage key={i} imgSrc={img} className={leftCol(i + 1)} />;
        }
        return <GalleryImage key={i} imgSrc={img} className={rightCol(i)} />;
      })}
    </div>
  );
};

export default GalleryContainer;
