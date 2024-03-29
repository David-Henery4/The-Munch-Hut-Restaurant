import { ContactContentSection, ContactHeader } from "@/components/contact";
import { Cta } from "@/components/shared";

const Contact = () => {
  return (
    <main className="w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk">
      <ContactHeader/>
      <ContactContentSection/>
      <Cta/>
    </main>
  );
}

export default Contact