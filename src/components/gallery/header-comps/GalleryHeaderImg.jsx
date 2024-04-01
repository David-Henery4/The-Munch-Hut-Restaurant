import Image from "next/image"

const GalleryHeaderImg = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Image
        src="/images/gallery/gallery-header.png"
        alt="Showing a plate of food and drinks on a busy table in the restaurant"
        width={3100}
        height={3100}
        priority={true}
        className="top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default GalleryHeaderImg