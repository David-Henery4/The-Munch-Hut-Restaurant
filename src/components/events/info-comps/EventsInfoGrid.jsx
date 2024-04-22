import EventsGridImage from "./events-image/EventsGridImage";
import { client } from "../../../../sanity/lib/client";
import { revalidateTag } from "next/cache";

const EventsInfoGrid = async () => {
  const { events } = await client.fetch(
    "*[_type == 'events'][0]{events}",
    {},
    { next: { tags: ["eventsList"] } }
  );
  revalidateTag("eventsList");
  //
  return (
    <div className="mt-8 grid gap-6 tab:grid-cols-teamGridColsTab smLap:mt-16 lgLap:mt-24">
      {events.map((eventItem) => {
        return (
          <EventsGridImage
            key={eventItem?._key}
            {...eventItem}
          />
        );
      })}
    </div>
  );
};

export default EventsInfoGrid;
