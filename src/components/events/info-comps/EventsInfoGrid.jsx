import EventsGridImage from "./events-image/EventsGridImage";

const EventsInfoGrid = () => {
  return (
    <div className="mt-8 grid gap-6 tab:grid-cols-teamGridColsTab smLap:mt-16 lgLap:mt-24">
      <EventsGridImage eventTitle={"Corporate Events"} />
      <EventsGridImage eventTitle={"Birthday parties"} />
      <EventsGridImage eventTitle={"Weddings"} />
      <EventsGridImage eventTitle={"Parties"} />
    </div>
  );
};

export default EventsInfoGrid;
