import Image from "next/image";

const EventsGridImage = ({ eventTitle }) => {
  return (
    <div className="relative group hover:after:absolute hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:bg-gold/50">
      <h3 className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block font-pompiere text-4xl">
        {eventTitle}
      </h3>
      <Image
        src="/images/events/events-grid-1.png"
        alt="Event"
        width={1400}
        height={1400}
        className="h-64 w-full object-center object-cover lgMob:h-80 XtraSmTab:h-96 smTab:h-[452px] smDesk:h-[552px]"
      />
    </div>
  );
};

export default EventsGridImage