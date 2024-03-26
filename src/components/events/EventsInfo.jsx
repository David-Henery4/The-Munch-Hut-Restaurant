import { EventsInfoText, EventsInfoGrid } from "./info-comps";

const EventsInfo = () => {
  return (
    <section className="col-start-2 col-end-12 text-center py-16 XtraSmTab:py-24 smLap:py-32 smLap:text-left">
      <EventsInfoText />

      <EventsInfoGrid />
    </section>
  );
};

export default EventsInfo;
