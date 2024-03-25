import Image from "next/image";
import { PrimaryHeader } from "../shared";

const EventsHeader = () => {
  return (
    <section className="relative mt-6 py-12 px-6 col-start-1 col-end-13">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-full top-0 left-0 absolute bg-black/30"/>
        <Image
          width={2100}
          height={2100}
          src="/images/events/events-header.png"
          alt="table at a party, full of party food, drinks and stacks of plates."
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 text-center">
        <PrimaryHeader>We’re more than just great food</PrimaryHeader>
      </div>

    </section>
  );
};

export default EventsHeader;
