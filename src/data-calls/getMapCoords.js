import { client } from "../../sanity/lib/client";
import { revalidateTag } from "next/cache";

const getMapCoords = async () => {
  const mapCoordData = await client.fetch(
    "*[_type == 'locationInformation'][0]{coordinates}",
    {},
    { next: { tags: ["mapCoordData"] } }
  );
  revalidateTag("mapCoordData");
  //
  const activeCoords = [
    mapCoordData?.coordinates?.lat,
    mapCoordData?.coordinates?.lng,
  ];
  //
  return activeCoords
};

export default getMapCoords;
