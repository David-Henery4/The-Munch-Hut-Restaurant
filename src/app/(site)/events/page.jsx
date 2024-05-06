// export const dynamic = "force-static";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

import { EventsHeader, EventsInfo } from "@/components/events";
import { Cta } from "@/components/shared";
const Events = () => {
  return (
    <main className="w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk">
      <EventsHeader />
      <EventsInfo />
      <Cta />
    </main>
  );
};

export default Events;
