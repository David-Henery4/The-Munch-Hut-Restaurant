import { SecondaryHeader, BodyText } from "@/components/shared";
import { client } from "../../../../sanity/lib/client";
import { revalidateTag } from "next/cache";

const EventsInfoText = async () => {
  const { eventsDescription } = await client.fetch(
    "*[_type == 'events'][0]{eventsDescription}",
    {},
    { next: { tags: ["eventsDescription"] } }
  );
  revalidateTag("eventsDescription");
  //
  return (
    <div className="grid gap-6 smLap:grid-cols-teamGridColsTab smLap:gap-y-0">
      <div className="text-red">
        <SecondaryHeader>Events</SecondaryHeader>
      </div>
      <div className="max-w-[560px] mx-auto smLap:col-start-2 smLap:col-end-3 smLap:row-start-2 smLap:row-end-3 smLap:m-0">
        <BodyText>{eventsDescription ? eventsDescription : ""}</BodyText>
      </div>
    </div>
  );
};

export default EventsInfoText;
