import {
  Header,
  AboutUs,
  MenuInfoSection,
  WeeklySpecials,
  SpecialOffers,
} from "@/components/home";
import { Cta } from "@/components/shared";

export default function Home() {
  return (
    <main className="w-full grid grid-cols-mob">
      <Header />
      <AboutUs />
      <MenuInfoSection />
      <WeeklySpecials />
      <SpecialOffers />
      <Cta/>
    </main>
  );
}
