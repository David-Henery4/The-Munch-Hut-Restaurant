import Image from "next/image";
import { FourthHeader } from "@/components/shared";
import { urlForImage } from "../../../../../sanity/lib/image";

const OffersCard = ({offer, offerImage}) => {
  return (
    <div className="w-full flex  bg-red even:bg-gold even:flex-row-reverse group smTab:max-h-[275px]">
      <div className="w-full px-6 py-9 text-left flex flex-[2] justify-start items-center lgMob:pl-10 lgMob:pr-4 group-even:lgMob:pr-10 group-even:lgMob:pl-4 lgLap:pl-[105px] group-even:lgLap:pr-[105px] desk:pl-[140px] group-even:desk:pr-[140px]">
        <div className="max-w-[300px] mx-auto lgDesk:mr-0 group-even:lgDesk:ml-0">
          <FourthHeader>{offer}</FourthHeader>
        </div>
      </div>
      <div className="w-full flex-[3]">
        <Image
          src={urlForImage(offerImage)}
          width={1250}
          height={1250}
          alt="Our current #1 offer"
          className="h-full w-full object-cover object-center img-clip group-even:img-clip-reverse"
        />
      </div>
    </div>
  );
};

export default OffersCard;
