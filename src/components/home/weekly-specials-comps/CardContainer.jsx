import SpecialsCard from "./card-comps/SpecialsCard";
import { client } from "../../../../sanity/lib/client";
import { revalidateTag } from "next/cache";

const CardContainer = async () => {
  const weeklySpecialsList = await client.fetch(
    `*[_type == "weeklySpecial"]{foodName, foodDescription, _id, foodImage}`,
    {},
    { next: { tags: ["weeklySpecialsList"] } }
  );
  revalidateTag("weeklySpecialsList");
  //
  console.log(weeklySpecialsList)
  //
  return (
    <div className="grid grid-cols-flexible gap-9 mt-16 lgMob:grid-cols-flexibleMedium">
      {weeklySpecialsList.map((foodItem) => {
        return <SpecialsCard key={foodItem?._id} {...foodItem} />;
      })}
      {/* <SpecialsCard/>
      <SpecialsCard/>
      <SpecialsCard/>
      <SpecialsCard/> */}
    </div>
  );
}

export default CardContainer