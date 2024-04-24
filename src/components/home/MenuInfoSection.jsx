import { client } from "../../../sanity/lib/client";
import { revalidateTag } from "next/cache";
import { MenuInfoCard, Slider } from "./menu-info-comps";

const MenuInfoSection = async () => {
  const homeMenuInfoData = await client.fetch(
    "*[_type == 'homeMenuDescription'][0]{description, descriptionTitle, menuSliderImages}",
    {},
    {
      next: {
        tags: ["homeMenuInfoData"],
      },
    }
  );
  revalidateTag("homeMenuInfoData");
  //
  return (
    <section className="w-full relative col-start-1 col-end-13 grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk max-w-[2560px] mx-auto">
      <div className="w-full col-start-2 col-end-12 max-w-[1160px] mx-auto">
        <MenuInfoCard
          description={homeMenuInfoData.description}
          descriptionTitle={homeMenuInfoData.descriptionTitle}
        />
        <Slider sliderImages={homeMenuInfoData.menuSliderImages} />
      </div>
    </section>
  );
};

export default MenuInfoSection;
