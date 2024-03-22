import Image from "next/image";
import { FourthHeader } from "@/components/shared";

const OffersCard = () => {
  return (
    <div className="w-full flex  bg-red even:bg-gold even:flex-row-reverse group">
      <div className="w-full px-6 py-9 text-left flex flex-[2] justify-start items-center lgMob:pl-10 lgMob:pr-4 group-even:lgMob:pr-10 group-even:lgMob:pl-4">
        <FourthHeader>Buy one get one free cocktails fridays</FourthHeader>
      </div>
      <div className="w-full flex-[3]">
        <Image
          src="/images/home-offers/cocktails.jpg"
          width={250}
          height={250}
          alt="Our current #1 offer"
          className="h-full w-full object-cover img-clip group-even:img-clip-reverse"
        />
      </div>
    </div>
  );
};

export default OffersCard;
