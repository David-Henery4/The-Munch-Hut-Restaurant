import { FifthHeader, BodyText } from "../..";
import { client } from "../../../../../sanity/lib/client";
import { revalidateTag } from "next/cache";

const LocationDets = async () => {
  const { address } = await client.fetch(
    "*[_type == 'locationInformation'][0]{address}", {}, {next: {tags: ["address"]}}
  );
  revalidateTag("address");
  //
  return (
    <div className="smTab:col-start-7 smTab:col-end-12 smTab:justify-self-center lap:justify-self-auto lap:col-start-7 lap:col-end-10 lap:row-start-3 lap:row-end-4">
      <FifthHeader>Location</FifthHeader>
      <div className="mt-4">
        <BodyText>{address || ""}</BodyText>
      </div>
    </div>
  );
}

export default LocationDets