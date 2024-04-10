import Image from "next/image";
import { urlForImage } from "../../../../../sanity/lib/image";
import { BodyText } from "@/components/shared";

const SpecialsCard = ({foodName, foodDescription, foodImage}) => {
  return (
    <div className="w-full even:pt-16">
      <div className="w-full h-64 lgMob:h-96 lap:h-[502px]">
        <Image
          src={urlForImage(foodImage)}
          width={720}
          height={720}
          alt="showcase of todays special no #1"
          className="h-full w-full object-cover object-center"
        />
        {/* Placeholder if no images */}
        {/* <div className="h-full w-full grid place-items-center bg-offWhite">
          <Image
            height={108}
            width={108}
            className="w-12 h-12 object-cover object-center"
            alt="No Image Icon"
            src="/assets/no-image-icon.png"
          />
        </div> */}
      </div>
      <div className="mt-4 lgMob:mt-6">
        <h4 className="text-lg font-semibold">{foodName}</h4>
        {/* <BodyText>
          {foodDescription}
        </BodyText> */}
      </div>
    </div>
  );
};

export default SpecialsCard;
