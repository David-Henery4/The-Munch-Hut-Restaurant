import { PrimaryHeader } from "@/components/shared"

const EventsHeaderTitle = () => {
  return (
    <div className="w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk max-w-[1440px] mx-auto">
      <div className="relative z-10 text-center col-start-2 col-end-12">
        <PrimaryHeader>We’re more than just great food</PrimaryHeader>
      </div>
    </div>
  );
}

export default EventsHeaderTitle