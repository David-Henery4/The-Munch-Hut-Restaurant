import Image from "next/image"

const EventsHeaderImg = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="w-full h-full top-0 left-0 absolute bg-black/40" />
      <Image
        width={2100}
        height={2100}
        src="/images/events/events-header.png"
        alt="table at a party, full of party food, drinks and stacks of plates."
        className="w-full h-full"
      />
    </div>
  );
}

export default EventsHeaderImg