import Image from "next/image";
import { BodyText } from "@/components/shared";
import { urlForImage } from "../../../../../sanity/lib/image";

const TeamCard = ({ jobTitle, name, description, imageOfEmployee }) => {
  return (
    <div className="w-full grid gap-4 max-w-[290px] self-start">
      <div>
        <Image
          height={675}
          width={676}
          src={urlForImage(imageOfEmployee)}
          alt="One of our pround chefs"
          className="h-[275px] w-full object-cover object-center"
        />
      </div>
      <div className="min-h-[75px] grid place-items-center">
        <h4 className="text-2xl font-pompiere lgMob:text-3xl">{name}</h4>
      </div>
      <p className="text-lg font-bold">{jobTitle}</p>
      <BodyText>{description}</BodyText>
    </div>
  );
};

export default TeamCard;
