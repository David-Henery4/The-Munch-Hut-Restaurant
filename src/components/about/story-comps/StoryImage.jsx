import Image from "next/image"
import { urlForImage } from "../../../../sanity/lib/image";

const StoryImage = ({ storyImage }) => {
  return (
    <div className="w-full lap:col-start-2 lap:col-end-3">
      <Image
        width={940}
        height={940}
        src={urlForImage(storyImage)}
        priority={true}
        alt="The bar and restaurant full of people on a very busy evening"
        className="w-full h-[378px] max-w-[570px] mx-auto border-r-8 border-t-8 border-r-gold border-t-gold object-cover object-center XtraSmTab:h-[478px] desk:h-[578px]"
      />
    </div>
  );
};

export default StoryImage