import Image from "next/image"

const GalleryImage = ({className = "", imgSrc}) => {
  return (
    <div className={`${className} w-full h-full max-h-[350px]`}>
      <Image src={imgSrc} alt="gallery image" width={2200} height={2200} className="w-full h-full object-cover" />
    </div>
  );
}

export default GalleryImage