// export const dynamic = "force-static";
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
    <main className="w-full grid grid-cols-mob lgMob:grid-cols-tab lgLap:grid-cols-lap desk:grid-cols-desk">
      <Header />
      <AboutUs />
      <MenuInfoSection />
      <WeeklySpecials />
      <SpecialOffers />
      <Cta />
    </main>
  );
}
