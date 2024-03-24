import Image from "next/image";
import { ThirdHeader } from "@/components/shared";

const TeamCard = () => {
  return (
    <div className="w-full grid gap-4">
      <div>
        <Image
          height={675}
          width={676}
          src="/images/about-team/chef-1.jpg"
          alt="One of our pround chefs"
        />
      </div>
      {/* Might have to make smaller */}
      <ThirdHeader>Bryan Machado</ThirdHeader>
      <p>Chef</p>
      <p className="line-clamp-3">
        Duis sed ut dolor viverra porttitor semper et faucibus facilisis. Hac
        maecenas rhoncus.
      </p>
    </div>
  );
};

export default TeamCard;
