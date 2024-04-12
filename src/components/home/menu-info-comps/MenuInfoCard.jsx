import { ThirdHeader, BodyText, MenuLink } from "@/components/shared";
import { client } from "../../../../sanity/lib/client";
import { revalidateTag } from "next/cache";

const MenuInfoCard = async () => {
  const cardInfoData = await client.fetch(
    "*[_type == 'homeMenuDescription'][0]{description, descriptionTitle}",
    {},
    {
      next: {
        tags: ["cardInfoData"],
      },
    }
  );
  revalidateTag("cardInfoData");
  //
  console.log(cardInfoData)
  return (
    <div className="col-start-2 col-end-12 row-start-2 row-end-11 max-w-[350px] mx-auto  text-center relative z-10 mt-16 px-4 py-8 rounded-2xl bg-black/80 lgMob:mt-24 lgMob:px-6 smTab:mx-0 smLap:max-w-[540px] smLap:mt-32">
      <ThirdHeader>
        {cardInfoData?.descriptionTitle || "Check out our menu"}
      </ThirdHeader>
      <div className="grid justify-items-center gap-6 mt-9">
        <BodyText>
          {cardInfoData?.description || "Welcome to The Munch Hut, where our menu is a culinary mosaic of flavors and textures, carefully curated to delight even the most discerning palate. From sizzling BBQ classics to innovative vegetariancreations and everything in between, each dish is crafted with passion and precision, promising a memorable dining experience for all."}
        </BodyText>
        <MenuLink isNotHeader={true} />
      </div>
    </div>
  );
};

export default MenuInfoCard;
