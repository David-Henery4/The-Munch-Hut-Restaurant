import { EventsHeaderImg, EventsHeaderTitle } from "./header-comps";

const EventsHeader = () => {
  return (
    <section className="relative py-14 col-start-1 col-end-13 XtraSmTab:py-20 smLap:py-28">
      <EventsHeaderImg/>
      <EventsHeaderTitle/>
    </section>
  );
};

export default EventsHeader;
