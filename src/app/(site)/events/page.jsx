import { EventsHeader, EventsInfo } from "@/components/events";

const Events = () => {
  return (
    <main className="w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk">
      <EventsHeader/>
      <EventsInfo/>
    </main>
  );
}

export default Events