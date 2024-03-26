import { SecondaryHeader, BodyText } from "@/components/shared";

const EventsInfoText = () => {
  return (
    <div className="grid gap-6 smLap:grid-cols-teamGridColsTab smLap:gap-y-0">
      <div className="text-red">
        <SecondaryHeader>Events</SecondaryHeader>
      </div>
      <div className="max-w-[560px] mx-auto smLap:col-start-2 smLap:col-end-3 smLap:row-start-2 smLap:row-end-3 smLap:m-0">
        <BodyText>
          Lorem ipsum dolor sit amet consectetur. Sed congue nulla ullamcorper
          nec enim. Blandit viverra etiam tempus dolor malesuada molestie
          magnis. Purus urna aliquet lorem eget elit imperdiet lectus pharetra
          molestie. Vestibulum consectetur amet pellentesque nulla nunc.
        </BodyText>
      </div>
    </div>
  );
};

export default EventsInfoText;
