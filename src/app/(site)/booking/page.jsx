export const dynamic = "force-static";
import {
  FormSection,
  BookingHeaderSection,
  EndingSection,
} from "@/components/booking";

const BookingPage = () => {
  return (
    <main className="w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk max-w-[1440px] mx-auto">
      <BookingHeaderSection />
      <FormSection />
      <EndingSection />
    </main>
  );
};

export default BookingPage;
